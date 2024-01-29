const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = require("express").Router()
const { usernameTaken } = require("./auth-middleware")
const { JWT_SECRET, BCRYPT_ROUNDS } = require("../secrets")

const Users = require("../users/users-model")

router.post("/register", usernameTaken, async (req, res, next) => {
  let { username, password} = req.body
  const role_type = "new_user"
  const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS)
  password = hash

  await Users.add({"username": username, "password": password, "role_type": role_type})
  .then(user => {
    res.status(201).json(user[0])
  })
  .catch(error => {
    next(error)
  })
})

router.post("/login", (req, res, next) => {
  let { username, password } = req.body
  Users.findBy({ username })
  .then(([user]) => {
    if(user && bcrypt.compareSync(password, user.password)) {
      const token = buildToken(user)
      res.status(200).json({ message: `Welcome back, ${username}`, token})
    } else {
      next({ status: 401, message: "Invalid credentials"})
    }
  })
  .catch(error => {
    next(error)
  }) 
})

function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
    role: user.role_type,
  }
  const options = {
    expiresIn: "1d",
  }
  return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = router;