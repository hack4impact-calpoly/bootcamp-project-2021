import React from 'react';
import './home.css';
import RecipePreview from './recipePreview';

export default function Home({recipes}) {
  return (
    <div>
        <div className="banner">
        <h2>Welcome to Jonathan's Indonesian Specialties</h2>
        <h4>In this website you will find three of my favorite Indonesian dishes! Check out the recipes down below. Enjoy!</h4>
        </div>
        <hr />
        <h1>Recipes</h1>
        <div id="menu">
          {recipes.map(recipe => <RecipePreview 
            key={recipe.name}
            name={recipe.name}
            desc={recipe.description}
            image={recipe.image}/>)}
        </div>
        <br />
    </div>
        
    
  );
}