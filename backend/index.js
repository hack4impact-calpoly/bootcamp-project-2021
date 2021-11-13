const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected"))
  .catch((error) => console.error(`Could not connect due to ${error}`));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3001);
