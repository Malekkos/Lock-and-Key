import React, { useState, useEffect } from "react" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons"



function Home () {
// implement useEffect to check my token and see what perms it has
// that will be deciding if the lock is already shown, or if it is unlocked

  let firstButton = document.getElementById("firstButton")
  let secondButton = document.getElementById("secondButton")
  let thirdButton = document.getElementById("thirdButton")

  // console.log(firstButton)
  var tryMeKeys = [
    { transform: 'translateY(0) scale(1, 1) rotate(0)', easing: 'ease-in' },
    { transform: 'translateY(0) scale(1.1, .9) rotate(0)' },
    { transform: 'translateY(-10%) scale(.9, 1.1) rotate(0)', offset: .4 },
    { transform: 'translateY(-10%) scale(1, 1) rotate(10deg)', offset: .5 },
    { transform: 'translateY(-10%) scale(1, 1) rotate(-10deg)', offset: .7 },
    { transform: 'translateY(-10%) scale(1,1) rotate(0deg)', offset: .8, easing: 'ease-in' },
    { transform: 'translateY(0) scale(1, 1) rotate(0)' }
  ];

  let clickVerify = function() {
    console.log("working")
    firstButton.animate( tryMeKeys,
      {transform: "scale(1,1) rotate(20deg)"})
  }


  const [locked, setLocked] = useState(true)
  const [unlocked, setUnlocked] = useState(true)
  async function onClick (token, lockType) { //probably has token?
    let lock = document.getElementsByName(lockType)
    console.log(token)
    lock[1].classList.forEach(val => {
      if(val === "locked" && token) {
        console.log(val)
        lock[0].classList.add("locked")
        lock[1].classList.remove("locked")
        console.log(lock[1].classList)
      }
    })
  }

  // firstButton.addEventListener("click", clickVerify)


  return (
    <>
      <div className="main">
        <div className="secretsContainer">
          <div id="firstSecret">
            <FontAwesomeIcon name="bronzeLock" className="unlocked bronzeLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon name="bronzeLock" className="locked bronzeLock" icon={faUnlock} size="2xl" />
            <input type="button" id="firstButton" className="verifyBtn" onClick={() => onClick("fgsfger", "bronzeLock")} value="Verify"></input>
          </div>
          <div id="secondSecret">
            <FontAwesomeIcon name="silverLock" className="unlocked silverLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon name="silverLock" className="locked silverLock" icon={faUnlock} size="2xl" />
            <input type="button" id="secondButton" className="verifyBtn" onClick={() => onClick("dasf", "silverLock")} value="Verify"></input>
          </div>
          <div id="thirdSecret">
            <FontAwesomeIcon name="goldLock" className="unlocked goldLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon name="goldLock" className="locked goldLock" icon={faUnlock} size="2xl" />
            <input type="button" id="thirdButton" className="verifyBtn" onClick={() => onClick("asdfasdf", "goldLock")} value="Verify"></input>
          </div>
        </div>
        <div className="instructionsContainer">
          <h2>Thanks for visiting!</h2>
          <div className="mainInstructions">
            <p>This is a demo project to showcase an understanding in <span src="https://csrc.nist.gov/glossary/term/authentication#:~:text=The%20process%20of%20verifying%20the,resources%20in%20an%20information%20system">Authentication</span> & Authorization</p>
            <p>Complete some, ultimately arbitrary, tasks and be rewarded with a few of my secrets!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home