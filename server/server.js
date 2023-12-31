const express = require("express");
const path = require("path");
const cors = require("cors");
// asdf
const app = express();

// SETTING MIDDLEWARE
app.use(express.json());
  // parse input to body
app.use(cors());
  // this middleware handle cors
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });
  // manual way of setting cors
  // Source: https://codedamn.com/news/backend/how-to-fix-cors-error
app.use(express.static(path.join(__dirname + "/../client", "build")));
  // this will make the server serve the static files from the react client public folder (made by build command)
  // if you access home, you will get this. 
  // Because of this reason, you need to set address to something other than home

// IMPORTING MODEL FROM KNEX
const model = require("./src/model");
// teset

// SENDING DATA
app.get("/", async (req, res) => {
  // console.log("test");
  const data = await model.getAllAccount();
  console.log(data);
  res.status(202).send(JSON.stringify(data));
  // res.status(201).send(JSON.stringify("Hello world from express"));
});

app.get("/gettask", async (req, res) => {
  const data = await model.getAllTask();
  // console.log(data);
  res.status(203).send(JSON.stringify(data));
});

app.post("/createtask", async (req, res) => {
  const inputData = req.body;
  // console.log(inputData);
  // console.log("test");
  // const inputData = {
  //   to_do: "test6",
  //   due_date: "2023-11-10"
  // };
  await model.createTask(inputData);
    // you have to await for creating task to
    // in this case, we are directly send the data inputted, no need to be processed

  const data = await model.getAllTask();
  res.status(203).send(JSON.stringify(data));
});

// CREATING PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

