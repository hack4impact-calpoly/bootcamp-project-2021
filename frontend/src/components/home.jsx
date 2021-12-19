import React from "react";
//import recipes from "../recipeData.js";
import RecipePreview from "./RecipePreview";
import RecipeForm from "./recipeForm";

//this is the main body of the home page, holds all of the recipe previews from the data
//not sure if this was supposed to be abstracted as well
export default function Home( {recipes} ) {
  return (
    <header>
      <RecipeForm />
      {recipes.map((recipe) => (
        <RecipePreview
          name={recipe.dishName}
          desc={recipe.shortDescription}
          image={recipe.photo}
        />
      ))}
    </header>
  );
}
