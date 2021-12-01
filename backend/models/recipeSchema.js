const mongoose = require('mongoose');
const { addListener } = require('nodemon');

const RecipeSchema = new mongoose.Schema({
    recipeName: String,
    recipeDescription: String,
    recipeInfo: String,
    recipeImage: String,
    ingredientList: Array,
    steps: Array,
    link: String
}, { collection: 'Recipe' });

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe