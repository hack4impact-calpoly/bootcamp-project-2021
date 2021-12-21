const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name : String,
    title: String,
    desc : String,
    ingredientList : [String],
    instructionList : [String],
    recipePic : String,
    alt : String
}, {collection: 'Recipes'}) //Collection name TBD

//mongoose.model(Name of mongo DB collection, schema)
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;

