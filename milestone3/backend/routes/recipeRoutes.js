const Recipe = require("../models/recipeSchema")
const express = require('express')

const router = express.Router()

// GET - /api/recipe - Get all recipes
router.get('/', async (req, res) => {
	const recipes = await Recipe.find({});
	res.send(recipes);
});
// GET - /api/recipe/:recipeName  - gets a specific recipe given the recipe name
router.get('/:name', async (req, res) => {
    const name = req.params.name
	const recipe = await Recipe.findOne({ 'name': name });
	res.send(recipe);
});
// POST - /api/recipe - Creates a new recipe given a body
router.post("/", async (req, res) => {
    try {
		const recipe = new Recipe({
			name: req.body.name,
			info: req.body.info,
			image: req.body.image,
			ingredients: req.body.ingredients,
			instructions: req.body.instructions
		});
		await recipe.save();
		res.send(`Recipe sent: "${recipe.name}"`);
	} catch (error) {
		res.send(error.message);
        console.log(`Error due to ${error.message}`)
	}
})
// PUT - /api/recipe/:recipeName/ingredient Adds an ingredient to a given recipe
router.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
    try{
        const recipeName = req.params.recipeName
        const ingredient = req.body.newIngredient
        await Recipe.findOneAndUpdate({name: recipeName}, {$push: {ingredients: ingredient}})
        res.send(`Ingredient added:  ${recipeName}`)
    } catch (error) {
        res.send(error.message);
        console.log(`Error due to ${error.message}`)
    }
    
})
// PUT - /api/recipe/:recipeName/instruction Adds an instruction to a given recipe
router.put("/api/recipe/:recipeName/instruction", async (req, res) => {
    try {
        const recipeName = req.params.recipeName
        const instruction = req.body.newInstruction
        await Recipe.findOneAndUpdate({name: recipeName}, {$push: {instructions: instruction}})
        res.send(`Instruction added:  ${recipeName}`)
    } catch (error) {
        res.send(error.message)
        console.log(`Error due to ${error.message}`)
    }

})
module.exports = router