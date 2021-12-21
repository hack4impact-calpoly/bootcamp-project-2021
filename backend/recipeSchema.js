const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  recipeName: String,
  link: String,
  recipeDescription: String,
  recipeImage: String,
  ingredients: Array,
  procedure: Array
}, {collection: 'Recipes'})

const Recipe = mongoose.model('Recipes', recipeSchema)

module.exports = Recipe