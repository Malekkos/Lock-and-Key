import React, { useState } from "react" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons"



function Home () {

  return (
    <>
      <div className="main">
        <div className="secretsContainer">
          <div id="firstSecret">
            <FontAwesomeIcon className="bronzeLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon className="bronzeLock" icon={faUnlock} size="2xl" />
            <input type="button" className="verifyBtn" onClick={() => {console.log("hehe")}} value="Verify"></input>
          </div>
          <div id="secondSecret">
            <FontAwesomeIcon className="silverLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon className="silverLock" icon={faUnlock} size="2xl" />
            <input type="button" className="verifyBtn" onClick={() => {console.log("hehe")}} value="Verify"></input>
          </div>
          <div id="thirdSecret">
            <FontAwesomeIcon className="goldLock" icon={faLock} size="2xl" />
            <FontAwesomeIcon className="goldLock" icon={faUnlock} size="2xl" />
            <input type="button" className="verifyBtn" onClick={() => {console.log("hehe")}} value="Verify"></input>
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