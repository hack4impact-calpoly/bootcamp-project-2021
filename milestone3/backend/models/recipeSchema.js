const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: String,
    desciption: String,
    image: String,
    ingredients: Array,
    instructions: Array
}, {collection: 'Recipes'})

const Recipe = mongoose.model('Recipes', recipeSchema)

module.exports = Recipe