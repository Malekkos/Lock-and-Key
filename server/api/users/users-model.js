const db = require("../../data/db-config")

// Method for finding a specific user given a condition(username, in this instance)
async function findBy(filter) {
  const data = await db("users as u")
    .leftJoin("roles as r", "r.role_id", "u.role_id")
    .select("user_id", "username", "password", "role_type")
    .where(filter)

  return data
}

// Method for finding a specific user given there ID
async function findById(user_id) {
  const data = await db("users as u")
    .leftJoin("roles as r", "r.role_id", "u.role_id")
    .select("user_id", "username", "role_type")
    .where("user_id", user_id)

  return data
  }

  // Method for getting the correct secret from the DB
async function getSecret(secret) {
  const data = await db("secrets")
  .where("secret_id", secret)
  .first()
  return data
}

// THOUGHTS: Copied, unfortunately. I need to, once this project is in a satisfactory state, change this or at least understand what this does instrisically. ATM, I don't, but it works.
// DESC: Method for adding a user. Not sure what transaction does for the DB, should check it out sometime.
async function add({ username, password, role_type}) {
  let created_user_id
  await db.transaction(async trx => {
    let role_id_to_use
    const [role] = await trx("roles").where("role_type", role_type)
    if(role) {
      role_id_to_use = role.role_id
    } else {
      const [role_id] = await trx("roles").insert({ role_type: role_type})
      role_id_to_use = role_id
    }
    const [user_id] = await trx("users").insert({ username, password, role_id: role_id_to_use })
    created_user_id = user_id
  })
  return findById(created_user_id)
}


// need to create add


module.exports = { findBy, add, getSecret }