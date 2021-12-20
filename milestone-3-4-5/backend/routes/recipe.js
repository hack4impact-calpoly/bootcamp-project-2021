const Recipe = require("../models/recipeSchema");
const express = require("express");

const router = express.Router();

// get all recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
});

// get recipe by name
router.get("/:recipeName", async (req, res) => {
  const name = req.params.recipeName;
  const recipe = await Recipe.findOne({
    recipeName: name
  });
  res.send(recipe);
});

// create new recipe given a body
router.post("/", async (req, res) => {
  const {
    recipeName,
    recipeDescription,
    recipeImage,
    ingredientList,
    instructionList
  } = req.body;
  let recipe = new Recipe({
    recipeName,
    recipeDescription,
    recipeImage,
    ingredientList,
    instructionList
  });
  try {
    recipe = await recipe.save();
    res.send(`${recipeName} added to collection`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

// add an ingredient to a given recipe
router.put("/:recipeName/ingredient", async (req, res) => {
  const recipeName = req.params.recipeName;
  const ingredient = req.body.newIngredient;
  try {
    const recipe = await Recipe.findOne({ recipeName: recipeName });
    recipe.ingredientList.push(ingredient);
    await recipe.save();
    res.send(`${ingredient} added to ingredients for ${recipeName}`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

// add an instruction to a given recipe
router.put("/:recipeName/instruction", async (req, res) => {
  const recipeName = req.params.recipeName;
  const instruction = req.body.newInstruction;
  try {
    const recipe = await Recipe.findOne({ recipeName: recipeName });
    recipe.instructionList.push(instruction);
    await recipe.save();
    res.send(`${instruction} added to instructions for ${recipeName}`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

module.exports = router;
