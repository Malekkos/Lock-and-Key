const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = require("express").Router()
const { usernameTaken } = require("./auth-middleware")
const { JWT_SECRET, BCRYPT_ROUNDS } = require("../secrets")

const Users = require("../users/users-model")

// Method to create an account
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

// Method to login to an existing account, I should make it so that logging in places a token in the auth header autimatically(it might?)
router.post("/login", (req, res, next) => {
  let { username, password } = req.body

  if(!username || !password) {
    next({ status: 401, message: "Username or Password missing"})
  }

  Users.findBy({ username })
  .then(([user]) => {
    if(user && bcrypt.compareSync(password, user.password)) {
      // const newHeader = new Headers();
      const token = buildToken(user)
      res.cookie("token", token, {
        httpOnly: false,
        secure: false,
        maxeAge: 100000,
        signed: true,
      })
      // Headers.set("Authorization", token)
      // newHeader.append("Authorization", "null")
      // newHeader.set("Authorization", token)
      // res.set("Access-Control-Expose-Headers", "Authorization")
      // localStorage.setItem("token", token)
      res.status(200).json({ message: `Welcome back, ${username}`, token })
    } else {
      next({ status: 401, message: "Invalid credentials"})
    }
  })
  .catch(error => {
    next(error)
  }) 
})

// THOUGHTS: I should dive into the options for... well, options. I think there is a lot I'm not utilizing
// Method to build a token for the user, supplying params for said token and whatnot
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