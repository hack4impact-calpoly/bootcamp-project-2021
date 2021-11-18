import React from 'react';
import recipes from '../recipeData';
import './home.css'
import RecipePreview from './recipePreview';

export default function Home() {
  return (
    <main>
      <div>
        <h1 class="recipesTitle"> Recipes </h1>
        {recipes.map(recipe => 
        <RecipePreview
          name={recipe.name}
          desc={recipe.info}
          image={recipe.image}
          link = {recipe.link}
        />)}
      </div>
    </main>
  );
}