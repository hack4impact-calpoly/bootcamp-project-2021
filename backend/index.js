const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const connection_url =
  "mongodb+srv://newUser:newPassword@cluster0.e3v7v.mongodb.net/RecipesDB?retryWrites=true&w=majority";
const recipeEndpoints = require("./routes/recipe");

// Server setup //

mongoose
  .connect(connection_url)
  .then(() => console.log("Successfully connected"))
  .catch((error) => console.log(`Could not connect due to ${error}`));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/recipe", recipeEndpoints);

app.listen(3001);
