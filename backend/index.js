const express = require("express");
const app = express();
const mongoose = require("mongoose");
const endpoints = require("./routes/recipe");


require("dotenv").config();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Congrats! Successfully connected"))
  .catch((error) => console.error(`Error: Could not connect because ${error}`));

app.use("/api/recipe", endpoints);

app.listen(3001);
