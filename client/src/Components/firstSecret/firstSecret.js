
import { jamesRuns } from "../../animations/firstSecretAnimation"
import React, { useState, useEffect } from "react"


function FirstSecret() {


  useEffect(() => {
    jamesRuns()
  }, [])

  //THOUGHTS: I need to look up, possibly in animations, for a way to make a element move away from your cursor,
  // cont. but at a static speed. Need it to be static so it's, well... possible
  //THOUGHTS2: Not sure how I feel about putting all the instructions on one line.
  // cont. on one hand, less likely to completely break to dimension changes, but, well,
  // cont. it looks super ugly in vs code. Also, I can't space the lines farther than they
  // cont. already are(to my knowledge)
  return (
    <>
    <div className="firstSecretInstructions" title="Instructions">
      <p className="firstSecretLine">Please, help me! Theres a Kevin James png loose on this page, and||if we don't catch it he'll make another half baked film where he's the funny, clumsy fat guy who keeps falling down! I'll upgrade your permissions if you help me with this.</p>
      {/* <p className="firstSecretLine">if we don't catch it he'll make another half baked film where he's the </p> */}
      {/* <p className="firstSecretLine">funny, clumsy fat guy who keeps falling down!</p> */}
      {/* <p className="firstSecretLine">I'll upgrade your permissions if you help me with this.</p> */}
    </div>
    <div className="gameOneMain">
      <div id="gameOneSpace" className="gameOneSpace">
        <img id="kevinJames" className="kevinJamesPNG" alt="Kevin James PNG" src="https://ih1.redbubble.net/image.5269047441.5510/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" />
      </div>
    </div>
    </>
  )
}

export default FirstSecret