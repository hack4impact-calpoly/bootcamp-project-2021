const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: [String],
    description: [String],
    image: [String],
    link: [String],
    ingredientlist: [Array],
    steps: [Array]
}, {collection: 'Recipes'})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe