const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeName: String,
    description: String,
    imageSrc: String,
    imagePrep: String,
    ingredientList: Array,
    instructionList: Array,
    route: String
}, { collection: 'Recipes' });

const Recipe = mongoose.model('Recipes', recipeSchema)

module.exports = Recipe;