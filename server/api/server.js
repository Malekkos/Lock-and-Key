const express = require("express")
const helmet = require("helmet")
const cors = require("./cors/index")
const cookieParser = require("cookie-parser")
// const path = require("path")

const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/users-router")

const server = express()

const JWT_SECRET = require("./secrets/index")

// THOUGHTS: Need to look up and understand helmet, Added it in a blind rage when trying to figure out a issue with server.
// cont: Issue, for anyone curious, was cors missing the invocation, this: ()
// cont 2: Don't think its bad to have, but its on my hit list if something turns sour

// THOUGHTS 2: Just realized, I need to still add all the testing for my endpoints and functions. I brought in supertest and jest for a reason.
server.use(helmet())
server.use(express.json())
server.use(cors)
server.use(cookieParser(JWT_SECRET.JWT_SECRET))
console.log("Made it past the adding stuff.")
// THOUGHTS: Add while trying to apply the Authorization header, as well as the token, so that I could grab it for later
// cont: I dont actually know how useful it is, I need to come by later, delete this, and see if it bricks the project
server.use((req, res, next) => {
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Authorization');
  res.header("Access-Control-Allow-Origin", "*")
  next();
})

// Simple pathways for server to recieve request on the routers.
server.use("/api/auth", authRouter)
server.use("/api/users", usersRouter)

// server.use(express.static(path.join(__dirname, 'build')));

// server.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// Error handling stuff.
server.use((err, req, res, next) => { //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = server