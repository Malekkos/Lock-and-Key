
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function SecondSecret() {

  let lineOne = [0, 0, 1, 0, 0]
  let lineTwo = [1, 0, 0, 0, 0]
  let lineThree = [0, 0, 0, 1, 0]

  let [message, setMessage] = useState({message: ""})
  let [score, setScore] = useState(0)
  let [lines, setLines] = useState([lineOne, lineTwo, lineThree])
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
      <div className="gameTwoExplanation">...Explanation</div>
      <div className="gameTwoScore">
        <strong>Score:</strong>
        <b>{score}</b>
      </div>
      <div className="gameTwoButton">
        <input type="button" value="start" />
      </div>
      <div className="gameTwoBoard">
        {lines.map((line) => {
          console.log("this is the line", line)
          return (
          line.map((num) => {
            return (
              num == 0 ? <div className="gameTwoHole">{num}</div> : <div className="gameTwoHole gopher">{num}</div>
          )
          }))
        })}
      </div>
    </div>
    </>
  )
}

export default SecondSecret