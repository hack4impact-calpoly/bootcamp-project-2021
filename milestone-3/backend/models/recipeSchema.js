const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  recipeName: String,
  recipeDescription: String,
  recipeImage: String,
  ingrediantList: [String],
  instructionList: [String]
}, {collection: 'Recipes'});

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe