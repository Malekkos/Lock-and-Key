const server = require("./api/server.js")

const port = process.env.PORT || 9000

// THOUGHTS: Should I include the fail safe of 9000? Or should I work under the pretense that a professional seting will always have a .env file with 
// cont. : a specific req on them?

// Simple launching point for server to start
server.use((req, res, next) => {
  console.log("This ran!")
  res.header("Access-Control-Allow-Origin", "*")
  next();
})

server.listen(port, () => {
  console.log(`listening on port ${port}`)
})
