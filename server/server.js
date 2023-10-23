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
app.get("/get", async (req, res) => {
  // console.log("test");
  const data = await model.getAllAccount();
  console.log(data);
  res.status(202).send(JSON.stringify(data));
  // res.status(201).send(JSON.stringify("Hello world from express"));
});


// CREATING PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

