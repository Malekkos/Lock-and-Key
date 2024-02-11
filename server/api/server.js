const express = require("express")
const helmet = require("helmet")
const cors = require("./cors/index")
const cookieParser = require("cookie-parser")

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

// server.

// Simple pathways for server to recieve request on the routers.
server.use("/api/auth", authRouter)
server.use("/api/users", usersRouter)


// Error handling stuff.
server.use((err, req, res, next) => { //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = server