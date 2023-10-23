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
}