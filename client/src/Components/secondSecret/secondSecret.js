
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function SecondSecret() {

  let [message, setMessage] = useState({message: ""})
  const navigate = useNavigate();

  let onclick = (event) => {
    axios.put("http://localhost:9000/api/auth/increase", { "username": sessionStorage.getItem("username") })
    .then(res => {
      setMessage(res.data)
      sessionStorage.setItem("tokenToBePassed", res.data.token)
      sessionStorage.setItem("role", "friend")
      setTimeout(() => navigate("/"), 200)
      setTimeout(() => window.location.reload(), 300)
    })
    .catch(error => {
      setMessage(error.response.data)
    })
  }

  return (
    <>
    <div className="gameTwoMain">
      { message ? <b className="gameTwoMessage">{message.message}</b> : "" }
      <p className="gameTwoText"> This is a <i className="gameTwoText">Temporary</i> placeholder button strictly for testing purposes, in lieu of the game thats supposed to be here. The purpose is increasing user perms</p>
      <button className="gameTwoButton" onClick={(event) => onclick(event)}>Click Me!</button>
    </div>
    </>
  )
}

export default SecondSecret