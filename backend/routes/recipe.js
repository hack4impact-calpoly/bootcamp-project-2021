const Recipe = require('../models/recipeSchema');
const express = require('express');

const router = express.Router();

// get all recipes
router.get('/', async (req, res) => {
	const recipes = await Recipe.find({});
	res.send(recipes);
});

// get specific recipe
router.get('/:recipeName', async (req, res) => {
	const recipeName = req.params.recipeName;
	const recipe = await Recipe.findOne({
		recipeName: recipeName
	});
	res.send(recipe);
});

// create new recipe (given a body)
router.post('/', async (req, res) => {
	const { recipeName, recipeImage, ingredientList, steps } = req.body;
	let recipe = new Recipe({
		recipeName,
		recipeImage,
		ingredientList,
		steps
	});

	await recipe.save((err, recipe) => {
		// error handling for POST request
		if (err) {
			return next(err);
		}
		res.send(`Recipe called ${recipeName} added to collection`);
	});
});

// adds ingredient to a given recipe
router.put('/:recipeName/ingredient', async (req, res) => {
	const recipeName = req.params.recipeName;
	const ingredient = req.body.newIngredient;
	const recipe = await Recipe.findOne({ recipeName: recipeName });

    recipe.ingredientList.push(ingredient);

    await recipe.save((err) => {
		// error handling for PUT request
		if (err) {
			console.log(err);
			res.send(err.message);
		}
		res.send(`Ingredient ${ingredient} added to ${recipeName}`);
	});
});

// adds instruction to a given recipe
router.put('/:recipeName/instruction', async (req, res) => {
	const recipeName = req.params.recipeName;
	const instruction = req.body.newInstruction;
	const recipe = await Recipe.findOne({ recipeName: recipeName });

    recipe.steps.push(instruction);

    await recipe.save((err) => {
		// error handling for PUT request
		if (err) {
			console.log(err);
			res.send(err.message);
		}
		res.send(`Instruction ${instruction} added to ${recipeName}`);
	});
});

module.exports = router;
