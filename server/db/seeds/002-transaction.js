/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("transaction").insert([
    {
     id: 1,
     account_id: 1,
     transaction_date: "2023-10-22",
     title: "transaction-test-1-1" 
    },
    {
     id: 2,
     account_id: 1,
     transaction_date: "2023-10-22",
     title: "transaction-test-1-2" 
    },
    {
     id: 3,
     account_id: 1,
     transaction_date: "2023-10-22",
     title: "transaction-test-1-3" 
    },
    {
     id: 4,
     account_id: 2,
     transaction_date: "2023-10-22",
     title: "transaction-test-2-1" 
    },
    {
     id: 5,
     account_id: 2,
     transaction_date: "2023-10-22",
     title: "transaction-test-2-2" 
    },
    {
     id: 6,
     account_id: 2,
     transaction_date: "2023-10-22",
     title: "transaction-test-2-3" 
    },
    {
     id: 7,
     account_id: 3,
     transaction_date: "2023-10-22",
     title: "transaction-test-3-1" 
    },
    {
     id: 8,
     account_id: 3,
     transaction_date: "2023-10-22",
     title: "transaction-test-3-2" 
    },
    {
     id: 9,
     account_id: 3,
     transaction_date: "2023-10-22",
     title: "transaction-test-3-3" 
    },
  ]);
};
