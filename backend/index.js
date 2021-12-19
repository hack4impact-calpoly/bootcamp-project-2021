const express = require("express");
const app = express();
const mongoose = require("mongoose");
const recipeEndpoints = require("./routes/recipe");

require("dotenv").config();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected"))
  .catch((error) => console.error(`Could not connect due to ${error}`));

app.use("/api/recipe", recipeEndpoints);

app.listen(3001);
