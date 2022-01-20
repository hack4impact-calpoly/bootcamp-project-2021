const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeTitle: String,
    description: String,
    image: String,
    link: String,
    ingredientList: Array,
    stepsList: Array
  }, {collection: 'Recipes'}
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;