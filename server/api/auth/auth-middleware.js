const { JWT_SECRET } = require("../secrets/index")
const jwt = require("jsonwebtoken")

const Users = require("../users/users-model")

const restricted = (req, res, next) => {
  console.log("RESTRICTED!!!!!!!!!!!!!!!")
  const token = req.headers.authorization
  if(token) {
    jwt.verify(token, JWT_SECRET, (error, decoded) => {
      if(error) {
        next({ status: 401, message: "Token invalid" })
      } else {
        req.decodedJWT = decoded
        next()
      }
    })
  } else {
    next({ status: 401, message: "Token required" })
  }
}

const only = role_type => (req, res, next) => {
  if(req.decodedJWT.role_type !== role_type) {
    next({ status: 403, message: "Wrong permissions!"})
  } else {
    next()
  }
}

const usernameTaken = async (req, res, next) => {
  const { username } = req.body

  const [ exists ] = await Users.findBy({"username": username})
  if(exists !== undefined) {
    next({ status: 401, message: "This username is already in use"})
  } else {
    next()
  }
}


module.exports = { restricted, only, usernameTaken }