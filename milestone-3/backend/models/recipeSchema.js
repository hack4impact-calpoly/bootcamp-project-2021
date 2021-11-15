const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    recipeName: String,
    description: String,
    imageSrc: String,
    ingredients: [String],
    instructions: [String],
    servingSize: String
}, {collection: 'Recipes'});

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe