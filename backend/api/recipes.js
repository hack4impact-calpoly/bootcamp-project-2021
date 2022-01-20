const express = require("express");
const Recipe = require("../models/schema.js");

const router = express.Router();


//Get all recipes
router.get('/api/recipe', async (req, res) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
});

//Get recipe with recipeName
router.get('/:recipeName', async (req, res) => {
    const recipes = await Recipe.findOne({recipeTitle: req.params.recipeName})
    res.send(recipes)
});

// post
router.post('/', async (req, res) => {
    const { recipeTitle, description, image, ingredientList, stepsList } = req.body;
    let newRecipe = new Recipe({
      recipeTitle,
      description,
      image,
      ingredientList,
      stepsList,
    });
    
  try {
    newRecipe = await newRecipe.save();
    res.send(`New Recipe, ${recipeTitle}, added to collection`);
  } catch (error) {
    res.status(500).send(error.message);
    console.error(error.message);
  }
});

router.put("/:recipeName/ingredient", async (req, res) => {
  const recipeName = req.params.recipeName;
  const ingredient = req.body.newIngredient;
  let updatedRecipe = await Recipe.findOneAndUpdate(
    { recipeTitle: recipeName },
    {
      $push: { ingredientList: ingredient },
    }
  );

  try {
    updatedRecipe = await updatedRecipe.save();
    res.send(
      `Updated recipe "${recipeName}", with additional ingredient of "${ingredient}"`
    );
  } catch (error) {
    res.status(500).send(error.message);
    console.error(error.message);
  }
});

router.put("/:recipeName/direction", async (req, res) => {
  const recipeName = req.params.recipeName;
  const direction = req.body.newDirection;
  let updatedRecipe = await Recipe.findOneAndUpdate(
    { recipeTitle: recipeName },
    {
      $push: { stepsList: direction },
    }
  );

  try {
    updatedRecipe = await updatedRecipe.save();
    res.send(
      `Updated recipe "${recipeName}", with additional direction of "${direction}"`
    );
  } catch (error) {
    res.status(500).send(error.message);
    console.error(error.message);
  }
});

module.exports = router;