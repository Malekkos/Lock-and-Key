
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function ThirdSecret() {

  let [message, setMessage] = useState({message: ""})
  let navigate = useNavigate()
  let onclick = (event) => {
    axios.put("https://lock-and-key-server.onrender.com/api/auth/increase", { "username": sessionStorage.getItem("username") })
    .then(res => {
      setMessage(res.data)
      sessionStorage.setItem("tokenToBePassed", res.data.token)
      sessionStorage.setItem("role", "best_friend")
      setTimeout(() => navigate("/"), 200)
      setTimeout(() => window.location.reload(), 300)
    })
    .catch(error => {
      setMessage(error.response.data)
    })
  }

  return (
    <>
    <div className="gameThreeMain">
      { message ? <b className="gameThreeMessage">{message.message}</b> : "" }
      <p className="gameThreeText"> This is a <i className="gameThreeText">Temporary</i> placeholder button strictly for testing purposes, in lieu of the game thats supposed to be here. The purpose is increasing user perms</p>
      <button className="gameThreeButton" onClick={(event) => onclick(event)}>Click Me!</button>
    </div>
    </>
  )
}

export default ThirdSecret