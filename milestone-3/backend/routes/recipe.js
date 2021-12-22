const Recipe = require("../models/recipeSchema");
const express = require("express");
const { application } = require("express");

const router = express.Router();

//get all recipes
router.get("/", async (req, res) => {
    const recipes = await Recipe.find({});

    res.send(recipes);
});

//get a specific recipe
router.get("/:recipeName", async (req, res) => {
    const recipeName = req.params.recipeName;
    const recipes = await Recipe.find({ recipeName });

    res.send(recipes);
});

//create a new recipe
router.post("/", async (req, res) => {

    const { key, name, link, alt, prev, desc, image, serving, ingredients, steps, tutorial } = req.body;

    let recipe = new Recipe({
        key: key,
        recipeName: name,
        link: link,
        alt: alt,
        previewDescription: prev,
        recipeDescription: desc,
        recipeImage: image,
        serving: serving,
        ingredientList: ingredients,
        steps: steps,
        tutorial: tutorial

    })

    try {
        recipe = await recipe.save()
        res.send(`${name} recipe added to collection`);
    } catch (err) {
        res.status(500).send(err.message);
        console.log(`error is ${err.message}`);
    }

});

//Add new ingredient
router.put("/:recipeName/ingredient", async (req, res) => {
    const recipeName = req.params.recipeName;
    const ingredient = req.body.newIngredient;

    Recipe.findOneAndUpdate({recipeName: recipeName}, {"$push": {"ingredientList": ingredient}}, (err, recipe) => 
    {
        if (err) {
            res.status(500).send(err.message);
            console.log(`error is ${err.message}`);
        }
        else {
            res.send('${ingredient} added to ${recipeName}');
        }
    });

});

//Add new instruction
router.put("/:recipeName/instruction", async (req, res) => {
    const recipeName = req.params.recipeName;
    const instruction = req.body.newInstruction;

    Recipe.findOneAndUpdate({recipeName: recipeName}, {"$push": {"steps": instruction}}, (err, recipe) => 
    {
        if (err) {
            res.status(500).send(err.message);
            console.log(`error is ${err.message}`);
        }
        else {
            res.send('${instruction} added to ${recipeName}');
        }
    });

});



module.exports = router;