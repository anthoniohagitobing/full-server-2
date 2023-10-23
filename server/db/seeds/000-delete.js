/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("todolist").del();
  await knex("transaction").del();
  await knex("account").del();
  // remember to delete from the less dependent table
};
