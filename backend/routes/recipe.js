const Recipe = require("../models/recipeSchema")
const express = require('express')

const router = express.Router()

router.get("/", async (req, res) => {
    const recipe = await Recipe.find({})
    res.send(recipe);
    return (res)
})

router.get('/:recipeName', async (req, res) => {
    const name = req.params.recipeName
    const recipe = await Recipe.findOne({
        'recipeName': name
    });
    res.send(recipeName)
})

router.post("/", async (req, res) => {
    const { recipeName, recipeDescription, recipeInfo, recipeImage, ingredientList, steps, link } = req.body
    let recipe = new Recipe({
        recipeName,
        recipeDescription,
        recipeInfo,
        recipeImage,
        ingredientList,
        steps,
        link
    });
    try {
        recipe = await recipe.save();
        res.send('${recipeName} added to collection');
    }
    catch (error) {
        res.status(error.code).send(error.message);
        console.log('error: ${error.message}');
    }
});

router.put("/:recipeName/ingredient", async (req, res) => {
    const recipeName = req.params.recipeName;
    const ingredient = req.body.newIngredient;
    const recipe = await Recipe.findOne({ recipeName: recipeName });

    recipe.ingredientList.push(ingredient);

    try {
        recipe = await recipe.save();
        res.send('${ingredient} added to ingredient list')
    }
    catch (error) {
        res.status(500).send(error.message);
        console.log('error: ${error.message}')
    }
});

router.put("/:recipeName/step", async (req, res) => {
    const recipeName = req.params.recipeName;
    const step = req.body.newStep;
    const recipe = await Recipe.findOne({ recipeName: recipeName });

    recipe.steps.push(step);

    try {
        recipe = await recipe.save();
        res.send('${step} added to step list')
    }
    catch (error) {
        res.status(500).send(error.message);
        console.log('error: ${error.message}')
    }
});


module.exports = router