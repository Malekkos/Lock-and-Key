import React, { useState, useEffect } from "react" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import {lockAnim, hoverVerify} from "../../animations/lockAnimation"

axios.defaults.withCredentials = true

function Home () {

  //DESC: Your gerneral state
  //THOUGHTS: None, really. Maybe set an initialGreetingMessage? Like with error? More QOL than anything
  const initialError = {errMessageOne: "", errMessageTwo: "", errMessageThree: "", errMessageFour: ""}
  const initialSecrets = {secretone: "", secrettwo: "", secretthree: ""}

  const [secrets, setSecrets] = useState(initialSecrets)
  const [loggedIn, setLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState(initialError)
  const [creds, setCreds ] = useState({username: "", password: ""})
  const [greetingMessage, setGreetingMessage] = useState()
  
  let onLoad = window.onload = lockAnim
  let onLoadVerify = window.onload = hoverVerify

  //DESC: Simple onChange for the input fields, username and password
  //THOUGHTS: This DEFINTELY needs some params to check length and characters and whatnot, but thats
  // cont. more near the end typa thing. In fact, that seems like something I should do on my server,
  // cont. have a middleware for checking the recieved values and then send a error, yada yada you get it
  let onChange = (event, type) => {
    if(type === "username") {
      setCreds({username: event, password: creds.password})
    } else {
      setCreds({username: creds.username, password: event})
    }
  }

  //DESC: login call using axios, sets several other state params while its at it
  //THOUGHTS: I'm recieving 2 things in data, the message and the token. Is including the token
  // cont. insecure? That could very well be a gateway to a security breach, at least for a 
  // cont. large company. In this environemnt, its not biggy, but food for thought nontheless.
  // cont. And, the only reason we were including token was so that I could manually grab it and
  // cont. test it with postman, so I think I can safely remove it. TBD.
  //IDEAS: Set a timer on greetingMessage, maybe a fade animation idk
  // cont. need to make the catch make a call to the error setter function and have it display the
  // cont. login error, incorrect creds in this situation. That does remind me, I think I have to 
  // cont. make some changes to an actual server fail, not bad creds. I'll have to, at some point, 
  // cont. try to run this without the server running. But then how would it get the custom message
  // cont. from it, if server isn't running? TBD
  let onSubmit = event => {
    event.preventDefault()
    
    axios.post("http://localhost:9000/api/auth/login", creds, {headers: {"Authorization": "googaa"}})
    .then(res => {
      localStorage.setItem("token", res.data.token)
      setLoggedIn(true)
      setErrorMessage(initialError)
      setGreetingMessage(res.data.message)
      setCreds({username: "", password: ""})
      
      console.log(res)
    })
    .catch(err => {
      console.log(err.response.data.message)
      errorChecker("errMessageFour", err.response.data.message)
    })
  }

  // DESC: Rendering method to get animation to work
  // THOUGHTS: Necessary? Possibly... This was done due to page changes making animations stop working. More of a
  // cont. bandaid, in my opinion, but I've yet to think of a better solution. TBD
  useEffect(() => {
    onLoad()
    onLoadVerify()
  }, [])

  // DESC: click method on verify button to check which is clicked, get its place, and make changes to its class and let animations work fluidly
  // THOUGHTS: token is a bit of a doozy, tbh. To get this to work... well, I don't know. I have to check some docs to see how I am supposed 
  // cont. to A. get the token out of the header and B. verify it. The verify bit already works over the server, so thats a secondary, or possibly
  // cont. null concern, so it's mainly determing the way to get token
  function onClick (token, lockType, lockNumber) {
    let lock = document.getElementsByName(lockType)
    let error = document.getElementById(`errMessage${lockNumber}`)

    if(loggedIn === false) {
      errorChecker(error, "You need to be logged in first!")
      // error.classList.remove("locked")
    } else if (lock[1].classList.contains("locked") && token /*have to find out how to test token, think the testing script is for servers only. TBD*/) {
      setErrorMessage(initialError)
      setTimeout(() => lock[0].classList.add("locked"), 1000)
      setTimeout(() => lock[1].classList.remove("locked"), 1000)
      setTimeout(() => secretAdder(lockNumber), 1000)
    }
  }

  // DESC: Function that takes in the errorNum(to be specific) and assigns it to the place it needs to go,
  // cont. clears other errors while its at it
  function errorChecker(errorNum, message) {
  if(typeof(errorNum) !== "string") {
    let currError = errorNum.id
    setErrorMessage({
      ...initialError, 
      [currError]: message
    })
  } else {
    let currError = errorNum
    setErrorMessage({
      ...initialError, 
      [currError]: message
    })
  }
  }

  function secretAdder(num) {
    const lower = num.toLowerCase()
    axios.get(`http://localhost:9000/api/users/secret_${lower}`, {headers: {"Authorization": localStorage.token}})
    .then(res => {
      setSecrets({
        [`secret${lower}`]: res.data.secret
      })
    })
    .catch(error => {
      errorChecker(`errMessage${num}`, error.response.data.message)
    })
  }

  //DESC: Main meat of the home page
  //THOUGHTS: Looks like I'll probably do the same thing I did with error that I will with putting secrets.
  // cont. Possibly, I'll make it so you have to hover over the lock, after verifying, and have a little box
  // cont. come out that has the secret data? It could save on space and the brain crushing effort of doing 
  // cont. max-width changes on my css files. Those get tedious QUICK, and make refactoring a pain.
  //THOUGHTS 2: I do believe there is id's and name and whatnot that literally do nothing, I'll have to scrape over this
  // cont. file later and find them.
  //THOUGHTS 3: I've been using one style, on class authMods, to style a few different things. Should I change that?
  // cont. They are intended to be static stylings, but its probably better for readability sake if I give them their
  // cont. own descriptive classes. This is for the future, definitely. Thats a reminder, I should maybe, well, definitely
  // cont. make some more css files. Putting them all in App.css is just lazy. Issue is, I don't really know how to make that
  // cont. conversion in the html stuff(or if its even possible). Worst case, I seperate the mountains of styling by lines
  return (
    <>
      <div className="main">
        <div>
        <div className="secretsContainer">
          <div id="firstSecret">
            <FontAwesomeIcon id="firstLock" name="bronzeLock" className="unlocked bronzeLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon id="secondLock" name="bronzeLock" className="locked bronzeLock" icon={faUnlock} size="2xl" />
            <input type="button" id="firstButton" className="verifyBtn" onClick={() => onClick("fgsfger", "bronzeLock", "One")} value="Verify"></input>
            <p id="errMessageOne" className="errorMessage">{errorMessage.errMessageOne}</p>
            <div class="secretContainer">
              <p className="secret">{secrets.secretone}</p>
            </div>
          </div>
          <div id="secondSecret">
            <FontAwesomeIcon id="thirdLock" name="silverLock" className="unlocked silverLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon id="fourthLock" name="silverLock" className="locked silverLock" icon={faUnlock} size="2xl" />
            <input type="button" id="secondButton" className="verifyBtn" onClick={() => onClick("dasf", "silverLock", "Two")} value="Verify"></input>
            <p id="errMessageTwo" className="errorMessage">{errorMessage.errMessageTwo}</p>
            <div class="secretContainer">
              <p className="secret">{secrets.secrettwo}</p>
            </div>
          </div>
          <div id="thirdSecret">
            <FontAwesomeIcon id="fifthLock" name="goldLock" className="unlocked goldLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon id="sixthLock" name="goldLock" className="locked goldLock" icon={faUnlock} size="2xl" />
            <input type="button" id="thirdButton" className="verifyBtn" onClick={() => onClick("asdfasdf", "goldLock", "Three")} value="Verify"></input>
            <p id="errMessageThree" className="errorMessage">{errorMessage.errMessageThree}</p>
            <div class="secretContainer">
              <p className="secret">{secrets.secretthree}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="instructionsContainer">
          <h2 className="homeHeader">Thanks for visiting!</h2>
          <div className="mainInstructions">
            <p className="homeText">This is a demo project to showcase my understanding of <span className="authMods">Authentication</span> & <span className="authMods">Authorization</span></p>
            <p className="homeText">Complete some arbitrary tasks and be rewarded with a few of my secrets!</p>
            <p className="authMods">{greetingMessage}</p>
          </div>
    { loggedIn ? "" : <form onSubmit={(event) => onSubmit(event)} className="loginContainer">
        <div className="inputsContainer">
            <p id="errorMessageFour" className="errorMessage">{errorMessage.errMessageFour}</p>
            <div className="passContainer">
              <h4 className="homeText loginText">Username</h4>
              <input onChange={(event) => onChange(event.target.value, "username")} className="loginUsername" value={creds.username} type="text" />
            </div>
            <div className="passContainer">
              <h4 className="homeText loginText">Password</h4>
              <input onChange={(event) => onChange(event.target.value, "password")} className="loginPassword" value={creds.password} type="password" />
            </div>
            <input id="loginButton" type="submit" className="authMods" value="Login" /> 
          </div>
        </form>}
        </div>
      </div>
    </div>
    </>
  )
}

export default Home