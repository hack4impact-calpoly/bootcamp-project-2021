const Recipe = require("../models/recipeSchema");
const express = require("express");

const router = express.Router();

//GET - gets all recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
});

//GET - gets a specific recipe
router.get("/:recipeName", async (req, res) => {
  const recipeName = req.params.recipeName;
  const recipe = await Recipe.findOne({
    recipeName: recipeName,
  });
  res.send(recipe);
});

//POST - creates new recipe given a body

router.post("/", async (req, res) => {
  const {
    recipeName,
    description,
    imageSrc,
    imagePrep,
    ingredientList,
    instructionList,
    route,
  } = req.body;
  const recipe = new Recipe({
    recipeName,
    description,
    imageSrc,
    imagePrep,
    ingredientList,
    instructionList,
    route,
  });

  // Error handling
  try {
    recipe = await recipe.save();
    res.send(`Recipe named ${recipeName} added to collection`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

// PUT - adds NEW INGREDIENT to a given recipe //

router.put("/:recipeName/ingredient", async (req, res) => {
  const recipeName = req.params.recipeName;
  const newIngredient = req.body.newIngredient;
  let updatedIngredientList = await Recipe.findOneAndUpdate(
    { recipeName: recipeName },
    { $push: { ingredientList: newIngredient } }
  );
  // Error handling
  try {
    updatedIngredientList = await updatedIngredientList.save();
    res.send(`Ingredient named ${newIngredient} added to ingredient list`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

// PUT - adds NEW INSTRUCTION to a given recipe //

router.put("/:recipeName/instruction", async (req, res) => {
  const recipeName = req.params.recipeName;
  const newInstruction = req.body.newInstruction;
  let updatedInstructionList = await Recipe.findOneAndUpdate(
    { recipeName: recipeName },
    { $push: { instructionList: newInstruction } }
  );
  // Error handling
  try {
    updatedInstructionList = await updatedInstructionList.save();
    res.send(`Instruction named ${newInstruction} added to instruction list`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

module.exports = router;
