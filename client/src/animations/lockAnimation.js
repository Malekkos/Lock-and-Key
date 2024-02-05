

const lockAnim = ("DOMContentLoaded", event => {
  console.log('loaded')
  let firstButton = document.getElementById("firstButton")
  let secondButton = document.getElementById("secondButton")
  let thirdButton = document.getElementById("thirdButton")

  let firstLock = document.getElementById("firstLock")
  let secondLock = document.getElementById("secondLock")
  let thirdLock = document.getElementById("thirdLock")
  let fourthLock = document.getElementById("fourthLock")
  let fifthLock = document.getElementById("fifthLock")
  let sixthLock = document.getElementById("sixthLock")

  let clickVerify = [
    { transform: "scale(1)" },
    { transform: "scale(2)" },
    { transform: "scale(1)" }
  ]
  let alreadyUnlocked = [
    {transform: "rotate(0deg)"},
    {transform: "rotate(-20deg)"},
    {transform: "rotate(20deg)"},
    {transform: "rotate(0deg)"}

  ]

  let timing = {
    duration: 1000,
    iterations: 1,
  }

  firstButton.addEventListener("click", () => {
    firstLock.animate(clickVerify, timing)
  }, false)
  firstButton.addEventListener("click", () => {
    secondLock.animate(alreadyUnlocked, timing)
  }, false)
  secondButton.addEventListener("click", () => {
    thirdLock.animate(clickVerify, timing)
  }, false)
  secondButton.addEventListener("click", () => {
    fourthLock.animate(alreadyUnlocked, timing)
  }, false)
  thirdButton.addEventListener("click", () => {
    fifthLock.animate(clickVerify, timing)
  }, false)
  thirdButton.addEventListener("click", () => {
    sixthLock.animate(alreadyUnlocked, timing)
  }, false)
})

export default lockAnim