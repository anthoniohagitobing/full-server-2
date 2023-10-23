const knex = require("./knex");

module.exports = {
  getAllAccount() {
    return knex
      .select({
        id: "id",
        username: "username",
        email: "email",
        password: "password",
        firstName: "first_name",
        lastName: "last_name",
      })
      .from("account");
  },

  getAllTask() {
    return knex
      .select({
        id: "id",
        done: "done",
        to_do: "to_do",
        due_date: "due_date",
      })
      .from("todolist");
  },

  createTask(list) {
    console.log(list);
    return knex("todolist").insert({
      done: true,
      to_do: list.to_do,
      due_date: list.due_date
    });
  },
}