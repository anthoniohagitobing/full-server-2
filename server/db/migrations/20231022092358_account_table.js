/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("account", function(table) {
    table.increments("id").primary();
    table.string("username").notNullable();
    table
      .string("email", 32)
      .unique()
      .notNullable()
      .index();
    table.string("password").notNullable();
    table.string("first_name", 32);
    table.string("last_name", 32);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("account")
};
