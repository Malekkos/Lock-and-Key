const cors = require("cors")

const corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedOrigin: "*",
}

module.exports = cors(corsOptions)