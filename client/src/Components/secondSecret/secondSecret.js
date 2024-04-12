
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function SecondSecret() {

  let lineOne = [0, 0, 0, 0, 0]
  let lineTwo = [0, 0, 0, 0, 0]
  let lineThree = [0, 0, 0, 0, 0]

  let initialLine = [lineOne, lineTwo, lineThree]

  let [message, setMessage] = useState({message: ""})
  let [score, setScore] = useState(0)
  let [lines, setLines] = useState(initialLine)
  const navigate = useNavigate();
  
  let setAdam = () => {

    setLines(initialLine)

    let randomLine = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    let randomNumber = Math.floor(Math.random() * (4 - 0 + 1) + 0);
    let newLines = initialLine
    console.log(newLines)
    console.log("this is the randomLine:", randomLine, "this is the random number:", randomNumber)
    newLines[randomLine][randomNumber] = 1
    setLines([
      newLines
    ])
    // console.log("this is lines:", lines)
    // console.log("this is the line in lines:", lines[randomLine])
    // console.log("this is the line in the line in the lines:", lines[randomLine][randomNumber])
    // setTimeout(() => {
    //   setLines(initialLine)
    // }, 100)
  }

  let startGame = () => {
    setAdam()
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
    setScore(score + 1);
    setAdam()
  }
  console.log(lines)
  return (
    <>
    <div className="gameTwoMain">
      <div className="gameTwoExplanation">We just got info that Adam Sandler is making Jack & Jill 2! Smash his face 20 times to to make that stupid idea go away!</div>
      <div className="gameTwoScore">
        <strong>Score:</strong>
        <b>{score}</b>
      </div>
      <div className="gameTwoButton">
        <input type="button" value="start" onClick={() => startGame()} />
      </div>
      <div className="gameTwoBoard">
        {lines.map((line) => {
          // console.log("this is the line", line)
          console.log(line)
          return (
          line.map((num) => {
            console.log(num)
            return (
              num === 0 ? <div className="gameTwoHole">{num}</div> : <div className="gameTwoHole gopher" onClick={(event) => {boop(event)}}>{num}</div>
          )
          }))
        })}
      </div>
    </div>
    </>
  )
}

export default SecondSecret