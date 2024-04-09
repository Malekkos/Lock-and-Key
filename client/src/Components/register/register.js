
import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {
  const initialError = ""
  const initialCreds = { username: "", password: "" }
  const [creds, setCreds] = useState(initialCreds)
  const [error, setError] = useState(initialError)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const onChange = (event, type) => {
    event.preventDefault()

    if (type === "username") {
      setCreds({ username: event.target.value, password: creds.password })
    } else {
      setCreds({ username: creds.username, password: event.target.value })
    }
  }


  //THOUGHTS: Need to make a minimum txt amount
  // cont: Maybe disable entering this route(/register) if there is a cookie
  // cont: need a method to logout OR I can change the text of /register to logout.
  // cont2 : That would probably be best
  const onSubmit = event => {
    event.preventDefault()
    setLoading(!loading)
    axios.post("https://lock-and-key-server.onrender.com/api/auth/register", creds)
      .then(res => {
        setError(initialError)
        setCreds(initialCreds)
        sessionStorage.setItem("password", creds.password)
        sessionStorage.setItem("username", res.data.username)
        sessionStorage.setItem("registerLogin", true)
        sessionStorage.setItem("token", res.data.token)
        sessionStorage.setItem("role", res.data.role)
        setTimeout(() => navigate("/"), 1000)
      })
      .catch(err => {
        setError(err.response.data.message)
      })
  }

  //TODO: Redirect to home
  //cont. : display welcome message
  //cont. : Make error checking middleware for the backend that checks name 
  //cont.2 : length(shouldnt be accepting a 0length value)
  return (
    <>
      {loading ? <div id="overlay">
        <div className="loader" ></div>
      </div> : ""}
      <div className="regMain">
        <div className="regContainer">
          <div className="regInstructions">
            <p className="regInstrText">Create a new account to get started!</p>
            <p className="regInstrText">You'll be giving a variety of challenges</p>
            <p className="regInstrText">to complete, with the purposes of</p>
            <p className="regInstrText">increasing your user privilege</p>
          </div>
          {error ? <p className="errorMessage">{error}</p> : ""}
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
                <input id="registerButton" className="regButton" type="submit" value="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export default Register