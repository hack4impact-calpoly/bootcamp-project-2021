const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
  recipeRoute: String,
  recipeName: String,
  recipeSubtitle: String,
  recipeDescription: String,
  recipeImage: String,
  imageAlt: String,
  ingredientList: Array,
  instructionList: Array
}, {collection: 'Recipes'})

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe