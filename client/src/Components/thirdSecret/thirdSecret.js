
import React, { useState, useEffect } from "react"
import axios from "axios"

function ThirdSecret() {

  let [message, setMessage] = useState({message: ""})

  let onclick = (event) => {
    axios.put("http://localhost:9000/api/auth/increase", { "username": sessionStorage.getItem("username") })
    .then(res => {
      setMessage(res.data)
      sessionStorage.setItem("tokenToBePassed", res.data.token)
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