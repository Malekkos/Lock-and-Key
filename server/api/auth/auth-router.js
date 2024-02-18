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
  console.log("password in register: ", password)
  await Users.add({"username": username, "password": password, "role_type": role_type})
  .then(user => {
    res.status(201).json({ username: user[0].username, password })
  })
  .catch(error => {
    next(error)
  })
})

// Method to login to an existing account, I should make it so that logging in places a token in the auth header autimatically(it might?)
// THOUGHTS: Leaving the cookie for now, despite myself not knowing if its particularily useful. Its not being used meaningfully
// cont. : at the moment, but I'm hoping to make it work for persistance sake(not loggin in constantly)
router.post("/login", (req, res, next) => {
  let { username, password } = req.body
  if(!username || !password) {
    next({ status: 401, message: "Username or Password missing"})
  }
  console.log("this is the password: ", password)
  console.log("this is the username: ", username)
  Users.findBy({ username })
  .then(([user]) => {
    console.log(user)
    if(user && bcrypt.compareSync(password, user.password)) {
      const token = buildToken(user)

      // res.cookie("token", token, {
      //   httpOnly: false,
      //   secure: false,
      //   maxeAge: 100000,
      //   signed: true,
      // })

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
  console.log(user.user_id, user.username, user.role_type)
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