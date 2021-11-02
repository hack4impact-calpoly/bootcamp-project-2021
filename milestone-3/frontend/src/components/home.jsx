import React from 'react';
import RecipePreview from './recipePreview';
import recipes from '../recipeData';

export default function Home() {
  return (
    <div>
      {/* Add in Welcome description here?*/}
      {recipes.map(recipe =>
        <RecipePreview 
          recipeName={recipe.name} 
          recipeDesc={recipe.description}
          imageSrc={recipe.imageSrc}
        />
      )};
    </div>
  );
}