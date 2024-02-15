
import React, { useState } from "react"
import axios from "axios"

function Register () {

  const initialCreds = {username: "", password: ""}
  const [creds, setCreds] = useState(initialCreds)

  // const onChange = event => {
// 
  // }
  return (
    <>
    <div className="regMain">
      <div className="regContainer">
       <div>
          <p>Create a new account to get started!</p>
          <p>You'll be giving a variety of challenges</p>
          <p>to complete, with the purposes of increasing</p>
          <p>your user privilege.</p>
        </div>
        <div className="regCredsContainer">
          <div className="regUsername">
            <p className="regUsernameText">Username</p>
            <input className="regInput" type="text" />
          </div>
          <div className="regPassword">
            <p className="regPasswordText">Password</p>
            <input className="regInput" type="password" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default Register