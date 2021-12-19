const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  id: String,
  recipeName: String,
  link: String,
  recipeDescription: String,
  recipeImage: String,
  ingredientList: [String],
  steps: [String]

}, {collection: 'Recipes'})

const Recipe = mongoose.model('Recipes', recipeSchema)

module.exports = Recipe
