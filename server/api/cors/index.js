const cors = require("cors")

const corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}
module.exports = cors(corsOptions)