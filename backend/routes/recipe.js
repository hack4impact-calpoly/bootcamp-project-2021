const Recipe = require("../models/recipeSchema");
const express = require("express");
const { findOneAndUpdate } = require("../models/recipeSchema");

const router = express.Router();

// get all recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
});

// get specific recipe
router.get("/:dishName", async (req, res) => {
  const name = req.params.dishName;
  const recipe = await Recipe.findOne({
    dishName: name,
  });
  res.send(recipe);
});

//posts a new recipe to the database
router.post("/", async (req, res) => {
  const {
    dishName,
    shortDescription,
    description,
    photo,
    ingredients,
    instructions,
  } = req.body;
  let recipe = new Recipe({
    dishName,
    shortDescription,
    description,
    photo,
    ingredients,
    instructions,
  });

  try {
    recipe = await recipe.save();
    res.send(`Recipe named ${dishName} added to collection`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(
      `Could not save ${dishName} to Database due to ${error.message}`
    );
  }
});

//adds a new ingredient to the list of the specified dish
router.put("/:dishName/ingredient", async (req, res) => {
  const dishName = req.params.dishName;
  const ingredient = req.body.newIngredient;
  const recipe = await Recipe.findOne({
    dishName: dishName,
  }).then(console.log("found it"));
  recipe.ingredients.push(ingredient);
  await Recipe.findOneAndUpdate(
    { dishName: dishName },
    { ingredients: recipe.ingredients }
  ).then(console.log("updated list"));
  res.send(`ingredient ${ingredient} added to ingredients list!`);
});

//adds a new instruction to the list of the specified dish
router.put("/:dishName/instruction", async (req, res) => {
  const dishName = req.params.dishName;
  const instruction = req.body.newInstruction;
  const recipe = await Recipe.findOne({
    dishName: dishName,
  }).then(console.log("found it"));
  recipe.instructions.push(instruction);
  await Recipe.findOneAndUpdate(
    { dishName: dishName },
    { instructions: recipe.instructions }
  ).then(console.log("updated list"));
  res.send(`instruction '${instruction}' added to instructions list!`);
});

module.exports = router;
