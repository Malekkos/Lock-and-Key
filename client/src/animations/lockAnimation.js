
//DESC: Animation method for making the locks move and jiggle
//THOUGHTS: I should move the animation to a separate folder, probably called animation. ~ DONE
// cont. It's lightweight enough that I think there shouldn't be any errors with the animation,
// cont. but I should maybe make some await statements to totally nullify that. TBD. Also,
// cont. this is my first time ever using animation so be merciful.
export const lockAnim = ("DOMContentLoaded", event => {
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
    { transform: "rotate(0deg)" },
    { transform: "rotate(-20deg)" },
    { transform: "rotate(20deg)" },
    { transform: "rotate(0deg)" }
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

//DESC: animation for the hoverVerify button, simply adds a question mark on a delay
//THOUGHTS: NONE
export const hoverVerify = ("DOMContentLoaded", () => {
  let button = document.getElementsByClassName("verifyBtn")

  for (let val of button) {
    val.addEventListener("mouseover", event => {
      setTimeout(() => {
        event.target.value = "Verify?"
      }, 300)
    })
    val.addEventListener("mouseleave", event => {
      setTimeout(() => {
        event.target.value = "Verify"
      }, 200)
    })
  }
})