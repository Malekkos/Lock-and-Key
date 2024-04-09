const router = require("express").Router()
const Users = require("./users-model");
const { restricted, only } = require("../auth/auth-middleware")

// THOUGHTS: Needs refactoring, I'm sure I can implement some way to have the secret 1-3 minimized into one call, but this will work for now until project is close to finished

// Method for getting the first secret
router.get("/secret_one", restricted, only({ allowed: ["acquaintance", "friend", "best_friend"] }), (req, res, next) => {
  Users.getSecret(1)
    .then(secret => {
      console.log("got the secret!")
      res.status(200).json(secret)
    })
    .catch(error => {
      next(error)
    })
})

// Method for getting the second secret
router.get("/secret_two", restricted, only({ allowed: ["friend", "best_friend"] }), (req, res, next) => {
  Users.getSecret(2)
    .then(secret => {
      console.log("got the secret!")
      res.status(200).json(secret)
    })
    .catch(error => {
      next(error)
    })
})

// Method for getting the third secret
router.get("/secret_three", restricted, only({ allowed: ["best_friend"] }), (req, res, next) => {
  Users.getSecret(3)
      .then(secret => {
      console.log("got the secret!")
      res.status(200).json(secret)
    })
    .catch(error => {
      next(error)
    })
})

module.exports = router;