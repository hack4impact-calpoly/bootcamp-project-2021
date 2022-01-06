import React from 'react';
import './home.css';
import recipeData from '../recipeData.js';
import RecipePreview from './recipePreview';

export default function Home() {
    return (
      <div className="home-container">
        <h2 class="welcome-hook">Hungry in the morning and looking for some easy recipes to fuel your day?</h2>
        <p class="welcome-text">
            You're in the right place! 
            Welcome to Brandon's Breakfast Bonanza, a collection of some of my favorite breakfast recipes.
        </p>

        <div className="recipes-container">
            {recipeData.map(recipe =>
              <RecipePreview 
                name={recipe.recipeTitle}
                img={recipe.image}
                desc={recipe.description}
                link={recipe.link}
              />
            )}
        </div>
      </div>
    );
}