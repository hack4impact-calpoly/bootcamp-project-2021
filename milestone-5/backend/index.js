const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const mongoose = require("mongoose");
const Recipe = require("./models/recipeSchema");
const connection_url =
  "mongodb+srv://new-user:h4i_bootcamp@cluster0.yhfnc.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose
  .connect(connection_url)
  .then(() => console.log("Successfully connected"))
  .catch((error) => console.error(`Could not connect due to ${error}`));

app.use(cors());

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/recipe", async (req, res) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
});

app.get("/api/recipe/:recipeName", async (req, res) => {
  const recipeName = await Recipe.find({ recipeName: req.params.recipeName });
  res.send(recipeName);
});

app.post("/api/recipe", async (req, res) => {
  const {
    recipeRoute,
    recipeName,
    recipeSubtitle,
    recipeDescription,
    recipeImage,
    imageAlt,
    ingredientList,
    instructionList,
  } = req.body;
  let recipe = new Recipe({
    recipeRoute,
    recipeName,
    recipeSubtitle,
    recipeDescription,
    recipeImage,
    imageAlt,
    ingredientList,
    instructionList,
  });

  try {
    recipe = await recipe.save();
    res.send(`${recipeName} recipe added to collection`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

app.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
  const recipeName = req.params.recipeName;
  const ingredient = req.body.newIngredient;
  const recipe = await Recipe.findOne({ recipeName: recipeName });

  try {
    recipe.ingredientList.push(ingredient);
    await recipe.save();
    res.send(`${ingredient} added to ${recipeName}.`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

app.put("/api/recipe/:recipeName/instruction", async (req, res) => {
  const recipeName = req.params.recipeName;
  const instruction = req.body.newInstruction;
  const recipe = await Recipe.findOne({ recipeName: recipeName });

  try {
    recipe.instructionList.push(instruction);
    await recipe.save();
    res.send(`${instruction} added to ${recipeName}.`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

app.listen(3001);
