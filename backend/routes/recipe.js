const Recipe = require("../models/recipeSchema");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
});

router.get("/:recipeName", async (req, res) => {
  const recipeName = req.params.recipeName;
  const recipes = await Recipe.find({ name: recipeName });
  res.send(recipes);
});

router.post("/", async (req, res) => {
  const { name, description, src, ingredients, instructions } = req.body;
  let newRecipe = new Recipe({
    name,
    description,
    src,
    ingredients,
    instructions,
  });

  try {
    newRecipe = await newRecipe.save();
    res.send(`A new recipe, ${name}, has been added to collection`);
  } catch (error) {
    res.status(500).send(error.message);
    console.error(error.message);
  }
});

router.put("/:recipeName/instruction", async (req, res) => {
  const recipeName = req.params.recipeName;
  const instruction = req.body.newInstruction;
  let updatedRecipe = await Recipe.findOneAndUpdate(
    { name: recipeName },
    {
      $push: { instructions: instruction},
    }
  );

  try {
    updatedRecipe = await updatedRecipe.save();
    res.send(
      `Updated recipe "${recipeName}", with added instruction of "${instruction}"`
    );
  } catch (error) {
    res.status(500).send(error.message);
    console.error(error.message);
  }
});


router.put("/:recipeName/ingredient", async (req, res) => {
  const recipeName = req.params.recipeName;
  const ingredient = req.body.newIngredient;
  let updatedRecipe = await Recipe.findOneAndUpdate(
    { name: recipeName },
    {
      $push: { ingredients: ingredient },
    }
  );

  try {
    updatedRecipe = await updatedRecipe.save();
    res.send(
      `Updated recipe "${recipeName}", with added ingredient of "${ingredient}"`
    );
  } catch (error) {
    res.status(500).send(error.message);
    console.error(error.message);
  }
});

module.exports = router;