
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function SecondSecret() {
  let lineOne = [0, 0, 0, 0, 0]
  let lineTwo = [0, 0, 0, 0, 0]
  let lineThree = [0, 0, 0, 0, 0]
  
  let initialLine = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]


  let [message, setMessage] = useState({ message: "" })
  let [score, setScore] = useState(0)
  let [lines, setLines] = useState([lineOne, lineTwo, lineThree])
  const navigate = useNavigate();

  let setAdam = (event) => {
    let randomLine = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    let randomNumber = Math.floor(Math.random() * (4 - 0 + 1) + 0);
    let newLines = initialLine
    newLines[randomLine][randomNumber] = 1
    setLines(
      newLines
    )
  }

  let startGame = (event) => {
    setAdam(event)
  }
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


  let boop = (event) => {
    // console.log(event)
    setScore(score + 1);
    if(score === 20) {
      console.log("You win!")
      onclick()
    } else {
    setAdam(event)
    }
  }
  return (
    <>
      <div className="gameTwoMain">
        <div className="gameTwoExplanation">We just got info that Adam Sandler is making Jack & Jill 2! Smash his face 20 times to to make that stupid idea go away!</div>
        <div className="gameTwoScore">
          <strong>Score:</strong>
          <b>{score}</b>
        </div>
        <div className="gameTwoButton">
          <input type="button" value="start" onClick={(event) => startGame(event)} />
        </div>
        <div className="gameTwoBoard">
          {lines.map((val) => {
            console.log(val)
            return(
              val.map((line) => {
                console.log(line)
                return(
                  line === 0 ? <div className="gameTwoHole">{line}</div> : <div className="gameTwoHole gopher">{line}</div>
                )
              })
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SecondSecret