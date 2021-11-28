const mongoose = require('mongoose')

// tells Mongoose that you're setting up a new schema with a specified structure
const recipeSchema = new mongoose.Schema({
    // is the actual name of the attribute within the schema. It is up to you to come up with descriptive names and attributes that fit the need of the data you will be storing
  recipeName: String,
  recipeLink: String,
  recipeSource: String,
  recipeDescription: String,
  recipeImage: String,
  ingredientList: Array,
  instructionList: Array
}, {collection: 'Recipes'})

const Recipe = mongoose.model('Recipes', recipeSchema)

module.exports = Recipe
