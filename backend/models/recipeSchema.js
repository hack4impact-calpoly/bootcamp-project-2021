const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    dishName: String,
    shortDescription: String,
    description: String,
    photo: String,
    ingredients: Array,
    instructions: Array,
  },
  { collection: "Recipes" }
);

const Recipe = mongoose.model("Recipe", RecipeSchema)

module.exports = Recipe