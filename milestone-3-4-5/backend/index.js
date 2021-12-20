const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
  next();
});

const connection_url =
  "mongodb+srv://borajoo:dbPassword@cluster0.7dnqv.mongodb.net/RecipesDB?retryWrites=true&w=majority";
mongoose
  .connect(connection_url)
  .then(() => console.log("Successful connection to MongoDB"))
  .catch(error => console.log("Failed connection to MongoDB: ", error.message));

const recipeEndpoints = require("./routes/recipe");

app.use("/api/recipe", recipeEndpoints);

app.listen(3001);
