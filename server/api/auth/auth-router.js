const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = require("express").Router()
const { usernameTaken } = require("./auth-middleware")
const { JWT_SECRET, BCRYPT_ROUNDS } = require("../secrets")

const Users = require("../users/users-model")

//DESC: Method to create an account
router.post("/register", usernameTaken, async (req, res, next) => {
  let { username, password } = req.body
  const role_type = "new_user"
  const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS)
  password = hash

  await Users.add({ "username": username, "password": password, "role_type": role_type })
    .then(user => {
      const token = buildToken(user)

      res.set("Authorization", token).status(201).json({ username: user[0].username, password, token })
    })
    .catch(error => {
      next(error)
    })
})

//DESC: Method to login to an existing account, I should make it so that logging in places a token in the auth header autimatically(it might?)
// THOUGHTS: Leaving the cookie for now, despite myself not knowing if its particularily useful. Its not being used meaningfully
// cont. : at the moment, but I'm hoping to make it work for persistance sake(not loggin in constantly)
router.post("/login", (req, res, next) => {
  let { username, password, registerLogin } = req.body
  // console.log(header)
  if (!username || !password) {
    next({ status: 401, message: "Username or Password missing" })
  }

  Users.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        if (registerLogin) {
        console.log("there is already an authorization")
        res.status(200).json({ message: `Welcome back, ${username}`})
        } else {
        const token = buildToken(user)
        req.headers.authorization = token
        res.status(200).json({ message: `Welcome back, ${username}`, token })
      }
      } else {
        next({ status: 401, message: "Invalid credentials" })
      }
    })
    .catch(error => {
      next(error)
    })
})

//DESC: Endpoint to hit to induce a permission increase in the database. 
router.put("/increase", (req, res, next) => {
  let { username } = req.body
  Users.increasePerms(username)
  .then(() => {
    Users.findBy({ username })
    .then(([user]) => {
      console.log(user)
      const token = buildToken(user)
      console.log(token)
      res.status(200).json({message: "You have successfully increased your permissions", token})
    })
    .catch(error => {
      next(error)
    })
  })
  .catch(() => {
    next({message: "You are already at the highest perm level"})
  })
})

//DESC: Method to build a token for the user, supplying params for said token and whatnot
// THOUGHTS: I should dive into the options for... well, options. I think there is a lot I'm not utilizing
function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
    role: user.role_type,
  }
  const options = {
    expiresIn: "1d",
  }
  console.log(payload)
  return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = router;