const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Recipe = require("./models/recipeSchema");
const recipeEndpoints = require("./routes/recipe");

require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected"))
  .catch((error) => console.error(`Could not connect due to ${error}`));

app.use("/api/recipe", recipeEndpoints);

app.listen(3001);
