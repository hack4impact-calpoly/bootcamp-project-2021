const Recipe = require("../models/recipeSchema")
const express = require('express')

const router = express.Router()

// get all recipes
router.get("/api/recipe", async (req, res) => {
  const recipes = await Recipe.find({})
  res.send(recipes)
})

// get recipe given recipe name
router.get("/api/recipe/:recipeName", async (req, res) => {
  const recipe = req.params.recipeName
  const recipes = await Recipe.find({recipeName: recipe})
  res.send(recipes)
})

//Creates a new recipe given a body
router.post("/api/recipe", async (req, res) => {
  const { recipeName, recipeDescription, recipeImage, ingrediantList, instructionList} = req.body
  let recipe = new Recipe({
    recipeName,
    recipeDescription,
    recipeImage,
    ingrediantList,
    instructionList,
  })

  recipe.save(function (err, recipe) {
    if (err) { 
      return next(err) 
    }
    res.send(`Recipe named ${recipeName} added to collection`)
  })
});

//updates the ingrediants of existing recipe
router.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
  const recipeName = req.params.recipeName;
  const ingrediant = req.body.newIngredient;
  const update = await Recipe.updateOne({ recipeName: recipeName }, { $push: {ingrediantList: ingrediant} });
  if(update.acknowledged){
    res.send(`Recipe named ${recipeName} has new ingrediant ${ingrediant}`)
  }
  else{
    res.send('update to ingrediant failed')
  }
});

//updates the instruction of existing recipe
router.put("/api/recipe/:recipeName/instruction", async (req, res) => {
  const recipeName = req.params.recipeName;
  const instruction = req.body.newInstruction;
  const update = await Recipe.updateOne({ recipeName: recipeName }, { $push: {instructionList: instruction} });
  if(update.acknowledged){
    res.send(`Recipe named ${recipeName} has new instruction ${instruction}`)
  }
  else{
    res.send('update to instruction failed')
  }
});

module.exports = router