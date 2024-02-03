/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// THOUGHTS: I don't actually understand what .unsigned() does, need to look it up.

// Schema for DB tables 
exports.up = function(knex) {
  return knex.schema
    .createTable("roles", roles => {
      roles.increments("role_id")
      roles.string("role_type", 32).notNullable().unique()
    })
    .createTable("users", users => {
      users.increments('user_id')
      users.string('username', 128).notNullable().unique()
      users.string('password', 128).notNullable()
      users.integer("role_id")
      .unsigned()
      .notNullable()
      .references("role_id")
      .inTable("roles")
      .onDelete("RESTRICT")
    })
    .createTable("secrets", secrets => {
      secrets.increments("secret_id")
      secrets.string("secret", 200).notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//Rollback for tables
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("secrets")
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
};
