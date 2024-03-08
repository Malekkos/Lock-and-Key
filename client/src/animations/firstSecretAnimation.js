

//This was courtesy of a kind fellows CodePen
// |||https://codepen.io/RobotWizard/pen/rRVKVa?editors=0010||| 
//DESC: Method used to make Kevin bounce around the screen
//THOUGHTS: Originally, I wanted this to make him run away from the mouse, and
// cont. that may not entirely be off the table. However, there is complications
// cont. of, well, jankiness hapenning. Reaction to hitting the side of the screen
// cont. could be solved, and I think that with some verbose logic, I could make
// cont. him 'react' to the mouse getting close, but it would require a bit of time
// cont. to A. Figure out x y cords of mouse, B. make him move in the correct direction
// cont. in relation to those cords. I find doing this is easier, but it is something I 
// cont. would like to attempt, maybe in a code pen, before experimenting with it on the
// cont. main project.
//THOUGHTS/BUGS 2: There is a problem when he hits the edge of the screen too hard, due to
// cont. speed. Overlaps and extends the screen before he gets his direction flipped. Also,
// cont. I don't know how hes going to react to a smaller screen, like mobile, and I also 
// cont. think that onMouseDown does NOT work with mobile. Unfortunately, I have to wait to
// cont. host the website so I can access it on my phone and begin testing, cus I don't know
// cont. how I would test it on PC.
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

    if(kevin.style.position === "static") {
      return
    }

    window.requestAnimationFrame(iterate)
  }
  window.requestAnimationFrame(iterate)
})


