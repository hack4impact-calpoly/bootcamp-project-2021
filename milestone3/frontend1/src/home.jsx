import "./home.css";
import Navbar from "./navBar";
import React from "react";
import RecipePreview from "./recipePreview";

export default function Home({
  allRecipes
}) {
  return (
    <div>
      <Navbar />
      <div className="flexx">
        {allRecipes ? (allRecipes.map((recipe) => (
          <RecipePreview
            name={recipe.name}
            description={recipe.description}
            imageSrc={recipe.imageSrc}
          />
        ))):(
          <p>error!</p>
        )}
      </div>
    </div>
  );
}
