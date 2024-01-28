import React, { useState, useEffect } from "react" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons"



function Home () {
  // implement useEffect to check my token and see what perms it has
  // that will be deciding if the lock is already shown, or if it is unlocked
  // dom
  const [locked, setLocked] = useState(true)
  const [unlocked, setUnlocked] = useState(true)

  window.onload = ("DOMContentLoaded", event => {
    let firstButton = document.getElementById("firstButton")
    let secondButton = document.getElementById("secondButton")
    let thirdButton = document.getElementById("thirdButton")

    let firstLock = document.getElementById("firstLock")
    let secondLock = document.getElementById("secondLock")
    let thirdLock = document.getElementById("thirdLock")
    let fourthLock = document.getElementById("fourthLock")
    let fifthLock = document.getElementById("fifthLock")
    let sixthLock = document.getElementById("sixthLock")

    let clickVerify = [
      { transform: "scale(1)" },
      { transform: "scale(2)" },
      { transform: "scale(1)" }
    ]
    let alreadyUnlocked = [
      {transform: "rotate(0deg)"},
      {transform: "rotate(-20deg)"},
      {transform: "rotate(20deg)"},
      {transform: "rotate(0deg)"}

    ]

    let timing = {
      duration: 1000,
      iterations: 1,
    }

    firstButton.addEventListener("click", () => {
      firstLock.animate(clickVerify, timing)
    }, false)
    firstButton.addEventListener("click", () => {
      secondLock.animate(alreadyUnlocked, timing)
    }, false)
    secondButton.addEventListener("click", () => {
      thirdLock.animate(clickVerify, timing)
    }, false)
    secondButton.addEventListener("click", () => {
      fourthLock.animate(alreadyUnlocked, timing)
    }, false)
    thirdButton.addEventListener("click", () => {
      fifthLock.animate(clickVerify, timing)
    }, false)
    thirdButton.addEventListener("click", () => {
      sixthLock.animate(alreadyUnlocked, timing)
    }, false)
  })


  //Create an error message for the if statement in onClick, or make a error message hidden until done

  function onClick (token, lockType) { //probably has token?
    let lock = document.getElementsByName(lockType)
    lock[1].classList.forEach(val => {
      if(val === "locked" && token) {
        setTimeout(() => lock[0].classList.add("locked"), 1000)
        setTimeout(() => lock[1].classList.remove("locked"), 1000)
      }
    })
  }
  return (
    <>
      <div className="main">
        <div className="secretsContainer">
          <div id="firstSecret">
            <FontAwesomeIcon id="firstLock" name="bronzeLock" className="unlocked bronzeLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon id="secondLock" name="bronzeLock" className="locked bronzeLock" icon={faUnlock} size="2xl" />
            <input type="button" id="firstButton" className="verifyBtn" onClick={() => onClick("fgsfger", "bronzeLock")} value="Verify"></input>
            <p class="locked">MY SUPER SECRET SECRET OF ALL TIME</p>
          </div>
          <div id="secondSecret">
            <FontAwesomeIcon id="thirdLock" name="silverLock" className="unlocked silverLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon id="fourthLock" name="silverLock" className="locked silverLock" icon={faUnlock} size="2xl" />
            <input type="button" id="secondButton" className="verifyBtn" onClick={() => onClick("dasf", "silverLock")} value="Verify"></input>
            <p class="locked">MY SUPER SECRET SECRET OF ALL TIME</p>
          </div>
          <div id="thirdSecret">
            <FontAwesomeIcon id="fifthLock" name="goldLock" className="unlocked goldLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon id="sixthLock" name="goldLock" className="locked goldLock" icon={faUnlock} size="2xl" />
            <input type="button" id="thirdButton" className="verifyBtn" onClick={() => onClick("asdfasdf", "goldLock")} value="Verify"></input>
            <p class="locked">MY SUPER SECRET SECRET OF ALL TIME</p>
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