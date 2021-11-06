import React from 'react';
import './Home.css';
import RecipePreview from '../RecipePreview/RecipePreview';
import recipes from '../../../recipeData.js';

export default function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to my recipe page!</h1>
        <p>Explore my site to find refreshing smoothie recipes perfect for any occasion 🍹</p>
      </header>
      {recipes.map(recipe => 
          <RecipePreview 
              name={recipe.recipeName}
              desc={recipe.recipeDescription}
              image={recipe.recipeImage}
          /> 
      )}
    </div>
  );
}
