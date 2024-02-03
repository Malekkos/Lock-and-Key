const db = require("../../data/db-config")


async function findBy(filter) {
  const data = await db("users as u")
    .leftJoin("roles as r", "r.role_id", "u.role_id")
    .select("user_id", "username", "password", "role_type")
    .where(filter)

  return data
}

async function findById(user_id) {
  const data = await db("users as u")
    .leftJoin("roles as r", "r.role_id", "u.role_id")
    .select("user_id", "username", "role_type")
    .where("user_id", user_id)

  return data
  }

async function getSecret(secret) {
  const data = await db("secrets")
  .where("secret_id", secret)
  .first()
  return data
}

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