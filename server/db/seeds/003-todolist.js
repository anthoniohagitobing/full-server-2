/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('todolist').insert([
    {
      id: 1,
      done: true,
      to_do: "test task 1",
      due_date: "2023-10-23"
    },
    {
      id: 2,
      done: false,
      to_do: "test task 2",
      due_date: "2023-10-24"
    },
    {
      id: 3,
      done: true,
      to_do: "test task 3",
      due_date: "2023-10-25"
    }
  ]);
};
