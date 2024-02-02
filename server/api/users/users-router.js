const router = require("express").Router()
const Users = require("./users-model");
const { restricted, only } = require("../auth/auth-middleware")

router.get("/", restricted, (req, res, next) => {
  console.log("asdasds")
  res.json("you blew it")
})







module.exports = router;