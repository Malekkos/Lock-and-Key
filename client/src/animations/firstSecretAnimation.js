

//This was courtesy of a kind fellows CodePen
// |||https://codepen.io/RobotWizard/pen/rRVKVa?editors=0010||| 
export const jamesRuns = ("DOMContentLoaded", event => {

  let kevin = document.getElementById("kevinJames")
  let container = document.getElementById("gameOneSpace")

  let y = kevin.offsetLeft
  let x = kevin.offsetHeight
  let dirX = 1
  let dirY = 1
  let speed = 25
  kevin.style.left = 0
  kevin.style.top = 0
  
  
  function iterate() {
    let width = container.offsetWidth
    let height = container.offsetHeight
    if(y + kevin.offsetHeight >= height || y < 0) {
      dirY *= -1
    }
    if(x + kevin.offsetWidth >= width || x < 0) {
      dirX *= -1
    }
    x += dirX * speed
    y += dirY * speed
    kevin.style.left = x + "px";
    kevin.style.top = y + "px";
    window.requestAnimationFrame(iterate)
  }
  window.requestAnimationFrame(iterate)
})


