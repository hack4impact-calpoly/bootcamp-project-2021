const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const connection_url =
  "mongodb+srv://rizenson:h4ipassword@cluster0.2ul0y.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose
  .connect(connection_url)
  .then(() => console.log("successful connection"))
  .catch((error) => console.error("connection unsuccessful"));

const RecipeSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    imageSrc: String,
    ingredients: Array,
    instructions: Array,
    link: String,
    courtesyOf: String,
  },
  { collection: "Recipes" }
);

const Recipe = mongoose.model("Recipes", RecipeSchema);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header('Access-Control-Allow-Methods', "*");
  next();
});

app.post("/api/recipe", async (req, res) => {
  const {
    name,
    description,
    imageSrc,
    ingredients,
    instructions,
    link,
    courtesyOf,
  } = req.body;
  let person = new Recipe({
    name: name,
    description: description,
    imageSrc: imageSrc,
    ingredients: ingredients,
    instructions: instructions,
    link: link,
    courtesyOf: courtesyOf,
  });
  try {
    await person.save();
    res.send(`Recipe named ${name} added to collection`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/recipe", async (req, res) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
});

app.get("/api/recipe1/:name", async (req, res) => {
  const recipes = await Recipe.findOne({
    name: req.params.name,
  });
  res.send(recipes);
});

app.post("/api/recipe/:recipeName/ingredient", async (req, res) => {
  await Recipe.findOneAndUpdate(
    { name: req.params.recipeName },
    { $push: { ingredients: req.body.addIngredient } }
  );
  res.send(req.body.addIngredient + " was added to " + req.params.recipeName);
  console.log("i am here");
});

app.post("/api/recipe/:recipeName/instruction", async (req, res) => {
  await Recipe.findOneAndUpdate(
    { name: req.params.recipeName },
    { $push: { instructions: req.body.newInstruction } }
  );
  res.send(req.body.newInstruction + " was added to " + req.params.recipeName);
});

app.listen(3001);
