/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("roles").truncate()
  await knex("roles").insert([
    { role_type: "new_user"},
    { role_type: "acquaintance"},
    { role_type: "friend"},
    { role_type: "best_friend"}
  ])
  await knex("users").insert([
    {
      username: "michael",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
      role_id: 1,
    },
    {
      username: "admin",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
      role_id: 4,
    }
    ])
};
