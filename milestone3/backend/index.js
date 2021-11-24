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

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const RecipeSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    imageSrc: String,
    ingredientList: String,
    instructionList: String,
    link: String,
    courtesyOf: String,
  },
  { collection: "Recipes" }
);

const Recipe = mongoose.model("Recipes", RecipeSchema);

app.post("/api/recipe", async (req, res) => {
  const {
    name,
    description,
    imageSrc,
    ingredientList,
    instructionList,
    link,
    courtesyOf,
  } = req.body;
  let person = new Recipe({
    name: name,
    description: description,
    imageSrc: imageSrc,
    ingredientList: ingredientList,
    instructionList: instructionList,
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

app.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
  await Recipe.findOneAndUpdate(
    { name: req.params.recipeName },
    { $push: { ingredientList: req.body.newIngredient } }
  );
  res.send(req.body.newIngredient + " was added to " + req.params.recipeName);
});

app.put("/api/recipe/:recipeName/instruction", async (req, res) => {
  await Recipe.findOneAndUpdate(
    { name: req.params.recipeName },
    { $push: { instructionList: req.body.newInstruction } }
  );
  res.send(req.body.newInstruction + " was added to " + req.params.recipeName);
});

app.listen(3001);
