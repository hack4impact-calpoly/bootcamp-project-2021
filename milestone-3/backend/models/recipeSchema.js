const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    recipeName: [String],
    link: [String],
    previewDesc: [String],
    recipeDesc: [String],
    recipeImage: [String],
    ingredients: [Array],
    steps: [Array]

}, {collection: 'Recipes'})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe