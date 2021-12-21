const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    src: String,
    ingredients: Array,
    instructions: Array,
  },
  { collection: "Recipes" }
);

const Recipe = mongoose.model("Recipes", recipeSchema);

module.exports = Recipe;