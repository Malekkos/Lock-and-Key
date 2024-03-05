


export const jamesRuns = ("DOMContentLoaded", event => {

  let kevin = document.getElementById("kevinJames")
  let container = document.getElementById("gameOneSpace")

  function iterate() {
    setInterval(move, 5);
  }

  function move() {
    kevin.style.top = kevin.offsetTop + 1
    kevin.style.left = kevin.offsetLeft + 1
  }

  container.addEventListener("mouseenter", () => {
    kevin.style.position = "absolute"
  })

  container.addEventListener("focus", () => {
    iterate()
  })


  container.addEventListener("mouseleave", () => {
    kevin.style.width = "7rem"
  })
})


