
import React, { useState } from "react"
import axios from "axios"

function Register() {
  const initialError = ""
  const initialCreds = { username: "", password: "" }
  const [creds, setCreds] = useState(initialCreds)
  const [error, setError] = useState(initialError)

  const onChange = (event, type) => {
    event.preventDefault()

    if (type === "username") {
      setCreds({ username: event.target.value, password: creds.password })
    } else {
      setCreds({ username: creds.username, password: event.target.value })
    }
    console.log(creds)
  }

  const onSubmit = event => {
    event.preventDefault()
    axios.post("http://localhost:9000/api/auth/register", creds)
    .then(res => {
      console.log(res)
      setError(initialError)
      setCreds(initialCreds)
    })
    .catch(err => {
      console.log(err.response.data.message)
      setError(err.response.data.message)
    })
  }

  return (
    <>
      <div className="regMain">
        <div className="regContainer">
          <div className="regInstructions">
            <p className="regInstrText">Create a new account to get started!</p>
            <p className="regInstrText">You'll be giving a variety of challenges</p>
            <p className="regInstrText">to complete, with the purposes of</p>
            <p className="regInstrText">increasing your user privilege</p>
          </div>
          { error ? <p className="errorMessage">{error}</p> : "" }
          <form className="reg" onSubmit={event => onSubmit(event)}>
            <div className="regCredsContainer">
              <div className="regUsername">
                <p className="regUsernameText">Username</p>
                <input className="regInput" type="text" onChange={event => onChange(event, "username")} value={creds.username} />
              </div>
              <div className="regPassword">
                <p className="regPasswordText">Password</p>
                <input className="regInput" type="password" onChange={event => onChange(event, "password")} value={creds.password} />
              </div>
              <div className="submit">
                <input className="regButton" type="submit" value="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export default Register