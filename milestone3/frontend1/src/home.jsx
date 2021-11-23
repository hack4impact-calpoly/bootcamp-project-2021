import './home.css'
import Navbar from './navBar';
import React from 'react';
import RecipePreview from './recipePreview';
import recipes from './recipeData';

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