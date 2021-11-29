const mongoose = require('mongoose')

// start of schema/model
const RecipeSchema = new mongoose.Schema({
    recipeName: String,
    recipeImage: String,
    ingredientList: [String],
    steps: [String],            
}, {collection: 'Recipes'});

const Recipe = mongoose.model('Recipe', RecipeSchema)
// end of schema/model

module.exports = Recipe
