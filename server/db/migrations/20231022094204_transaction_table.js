/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("transaction", function(table) {
    table.increments("id").primary();
    table.integer("account_id").notNullable();
    table.foreign("account_id").references("account.id");
    table.date("transaction_date").notNullable();
    table.date("title");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("transaction");
};
