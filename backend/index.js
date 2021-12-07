const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const connection_Url =
  "mongodb+srv://newUser:newPassword@myrecipes.96r6g.mongodb.net/RecipesDB?retryWrites=true&w=majority";

const Recipe = require("./models/recipeSchema");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
  next();
});

const recipeEndpoints = require("./routes/recipe");
app.use("/api/recipe", recipeEndpoints);

mongoose
  .connect(connection_Url)
  .then(() => console.log("Succesfully Connected"))
  .catch((error) =>
    console.log(`Could not connect to the Database due to ${error}`)
  );



//message to myself
app.get("/", (req, res) => {
  res.send("Hello world! I am trying to understand this backend stuff");
});

app.listen(3001);
