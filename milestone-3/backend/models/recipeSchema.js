const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  key: [String],
  recipeName: [String],
  link: [String],
  alt: [String],
  previewDescription: [String],
  recipeDescription: [String],
  recipeImage: [String],
  serving: [String],
  ingredientList: [Array],
  steps: [Array],
  tutorial: [String]


}, {collection: 'Recipes'})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe