/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("transaction").del();
  await knex("account").del();
  await knex("todolist").del();
  // remember to delete from the less dependent table
};
