const db = require("../../data/db-config")


async function findBy(filter) {
  const data = await db("users as u")
    .leftJoin("roles as r", "r.role_id", "u.role_id")
    .select("user_id", "username", "password", "role_type")
    .where(filter)

  return data
}



// need to create add


module.exports = { findBy, add }