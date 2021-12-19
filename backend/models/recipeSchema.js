const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: String,
  link: String,
  desc: String,
  recipeImage: String,
  size: String,
  ingredients: [String],
  prepTime: String,
  prep: [String]
}, {collection: 'Recipes'})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe