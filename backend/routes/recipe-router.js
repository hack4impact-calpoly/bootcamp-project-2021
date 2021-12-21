const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe-schema');

// GET - /api/recipe -> get all recipes
router.get('/', async (req, res) => {
	const recipes = await Recipe.find({});
	res.send(recipes);
});

// GET - /api/recipe/:name -> gets the recipes that match a given recipe name
router.get('/:name', async (req, res) => {
	const recipe = await Recipe.find({ name: new RegExp(req.params.name, 'i') });
	res.send(recipe);
});

// POST - /api/recipe -> creates a new recipe given a body.
router.post('/', async (req, res) => {
	try {
		// create recipe document
		const recipe = new Recipe({
			name: req.body.name,
			description: req.body.description,
			imageURL: req.body.imageURL,
			ingredients: req.body.ingredients,
			instructions: req.body.instructions
		});

		// save recipe to db
		await recipe.save();

		res.send(`Saved recipe "${recipe.name}"`);
	} catch (e) {
		res.send('Error creating recipe');
	}
});

// PUT - /api/recipe/:name/:type -> adds an ingredient/instruction to a given recipe
router.put('/:name/:type', async (req, res) => {
	// get type param
	const type = req.params.type;
	if (type !== 'ingredients' && type !== 'instructions') {
		res.send('Invalid type parameter');
	} else {
		try {
			// get recipe
			const recipe = await Recipe.findOne({ name: req.params.name });

			// modify array
			const position =
				req.body.position > recipe[type].length
					? recipe[type].length
					: req.body.position;
			recipe[type].splice(position, 0, req.body.value);

			// save to db
			await recipe.save();

			res.send(
				`Added ${type.substring(0, type.length - 1)} "${
					req.body.value
				}" to recipe "${recipe.name}" at position ${position}`
			);
		} catch (e) {
			res.send(e.message);
		}
	}
});

// DELETE - /api/recipe:name -> deletes a specific recipe given the recipe name
router.delete('/:name', async (req, res) => {
	// delete recipe
	const recipe = await Recipe.findOneAndDelete({ name: req.params.name });

    // check if recipe was deleted
    if (recipe) {
		res.send(`Deleted recipe "${recipe.name}"`);
	} else {
        res.send(`Unable to delete recipe "${req.params.name}"`);
	}
});

// DELETE - /api/recipe/:name/:type/:index -> deletes an ingredient/instruction to a given recipe
router.delete('/:name/:type/:index', async (req, res) => {
	// get type param
	const type = req.params.type;
	if (type !== 'ingredients' && type !== 'instructions') {
		res.send('Invalid type parameter');
	} else {
		try {
			// get recipe
			const recipe = await Recipe.findOne({ name: req.params.name });

			// modify array
			const index =
				req.params.index > recipe[type].length - 1
					? recipe[type].length - 1
					: req.params.index;
			recipe[type].splice(index, 1);

			// save to db
			await recipe.save();

			res.send(
				`Deleted ${type.substring(
					0,
					type.length - 1
				)} "${index}" from recipe "${recipe.name}"`
			);
		} catch (e) {
			res.send(e.message);
		}
	}
});

module.exports = router;
