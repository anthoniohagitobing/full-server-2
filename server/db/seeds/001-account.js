/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("account").insert([
    {
      id: 1,
      username: "test-username1",
      password: "test-password1",
      email: "test@gmail.com1",
      first_name: "test-first-name1",
      last_name: "test-last-name1",
    },
    {
      id: 2,
      username: "test-username2",
      password: "test-password2",
      email: "test@gmail.com2",
      first_name: "test-first-name2",
      last_name: "test-last-name2",
    },
    {
      id: 3,
      username: "test-username3",
      password: "test-password3",
      email: "test@gmail.com3",
      first_name: "test-first-name3",
      last_name: "test-last-name3",
    }
  ]);
};
