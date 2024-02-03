const router = require("express").Router()
const Users = require("./users-model");
const { restricted, only } = require("../auth/auth-middleware")

router.get("/secret_one", restricted, only("acquaintance"), (req, res, next) => {

  Users.getSecret(1)
  .then(secret => {
    console.log(secret)
  })
})

router.get("/secret_two", restricted, only("friend"), (req, res, next) => {

})

router.get("/secret_three", restricted, only("best_friend"), (req, res, next) => {

})





module.exports = router;