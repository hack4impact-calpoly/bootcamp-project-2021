import React from 'react';
import recipes from '../recipeData';
import './home.css'
import RecipePreview from './recipePreview';

export default function Home() {
  return (
    <div>
      <h1> Ishaan's Kitchen </h1>
      <h1> Recipes </h1>
      {recipes.map(recipe => 
      <RecipePreview
        name={recipe.name}
        desc={recipe.info}
        image={recipe.image}
      />)}
    </div>
  );
}