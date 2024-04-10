
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function SecondSecret() {

  let [message, setMessage] = useState({message: ""})
  const navigate = useNavigate();

  let onclick = (event) => {
    axios.put("https://lock-and-key-server.onrender.com/api/auth/increase", { "username": sessionStorage.getItem("username") })
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
      <div className="gameTwoExplanation"></div>
      <div className="gameTwoScore"></div>
      <div className="gameTwoButton"></div>
      <div className="gameTwoBoard"></div>
    </div>
    </>
  )
}

export default SecondSecret