const router = require("express").Router()
const Users = require("./users-model");
const { restricted, only } = require("../auth/auth-middleware")

router.get("/secret_one", restricted, only({ allowed: ["acquaintance", "friend", "best_friend"]}), (req, res, next) => {
  Users.getSecret(1)
  .then(secret => {
    // console.log(secret)
    res.status(200).json(secret)
  })
  .catch(error => {
    next(error)
  })
})

router.get("/secret_two", restricted, only({ allowed: ["friend", "best_friend"]}), (req, res, next) => {
  Users.getSecret(2)
  .then(secret => {
    res.status(200).json(secret)
  })
  .catch(error => {
    next(error)
  })
})

router.get("/secret_three", restricted, only({ allowed: ["best_friend"]}), (req, res, next) => {
  Users.getSecret(3)
  .then(secret => {
    res.status(200).json(secret)
  })
  .catch(error => {
    next(error)
  })
})

module.exports = router;