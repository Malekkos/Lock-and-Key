
import React, { useState, useEffect } from "react"
import axios from "axios"




function SecondSecret() {

  let [message, setMessage] = useState({message: ""})

  let onclick = (event) => {
    axios.put("http://localhost:9000/api/auth/increase", { "username": localStorage.getItem("username") })
    .then(res => {
      setMessage(res.data)
      localStorage.setItem("tokenToBePassed", res.data.token)
    })
    .catch(error => {
      setMessage(error)
    })
  }

  return (
    <>
    <div className="gameTwoMain">
      { message ? <b>{message.message}</b> : "" }
      <p className="gameTwoText"> This is a <i className="gameTwoText">Temporary</i> placeholder button strictly for testing purposes, in lieu of the game thats supposed to be here. The purpose is increasing user perms</p>
      <button className="gameTwoButton" onClick={(event) => onclick(event)}>Click Me!</button>
    </div>
    </>
  )
}

export default SecondSecret