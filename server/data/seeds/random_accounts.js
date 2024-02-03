/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("roles").truncate()
  await knex("secrets").truncate()
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
    },
    {
      username: "slayer",
      password: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6InNsYXllciIsInJvbGUiOiJuZXdfdXNlciIsImlhdCI6MTcwNjkxOTA5OCwiZXhwIjoxNzA3MDA1NDk4fQ.8SzgCH36eBahsNa4FS4Di1Vp-0ZpHML1sGFnEjEDIEc",
      role_id: 2,
    }
    ])
    await knex("secrets").insert([
      {secret: "I've seen The Office maybe 12 times, all episodes. I stopped liking the show after the 6th go around. Don't know why I kept watching."},
      {secret: "I started a stealing spree of 3d printed blocks of cheese from my school(they were used as doorstops). Ended up getting my friend interrogated by campus security. Fond memory, to be honest."},
      {secret: "While hiking with a girl I had a crush on, we came upon a Snapple bottle filled with a dark yellow substance. I picked it up, threw it up as high as I could, and witnessed it shatter, splashing old trucker pee everywhere. Torpedoed my chance with her, but I found it hilarious."},
    ])
};
