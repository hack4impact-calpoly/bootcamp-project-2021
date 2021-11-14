import React from 'react';
import recipes from './recipeData';
import './home.css'
import RecipePreview from './recipePreview';
import Navbar from './navBar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div class="flexx">
        {recipes.map(recipe =>
          <RecipePreview
            name={recipe.name}
            description={recipe.description}
            imageSrc={recipe.imageSrc}
          />)}
      </div>
    </div>
  );
}