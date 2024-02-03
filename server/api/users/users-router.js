const router = require("express").Router()
const Users = require("./users-model");
const { restricted, only } = require("../auth/auth-middleware")

router.get("/", restricted, only("best_friend"), (req, res, next) => {
})







module.exports = router;