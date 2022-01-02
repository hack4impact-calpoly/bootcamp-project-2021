import React from "react";
import RecipePreview from "./recipePreview";
import recipes from "./recipeData";
import './App.css'

export default function Home() {
    return (
        <header class="content">
            <h1>Welcome to Carter's Recipes!</h1>
            <p class="intro">
                I love cooking, here are some recipes!
            </p>
            
            {recipes.map(recipe => 
            <RecipePreview
                name={recipe.recipeName}
                desc={recipe.previewDesc}
                image={recipe.recipeImage}
                page={recipe.link}
            /> // This is how we call the component
            )}
        </header>
    );
}