import React from 'react';
import Recipe from './recipe';
import './style.css';

export default function HomePage({recipes}) {
    return (
        <div>
            <h1 id="greeting">Hungry? You have come to the right place!</h1>
            <p id="description">Listed below are a few of my all time favorite recipies that are bound to make your mouth water! All of these items are very easy to make and light on the bank. These recipes are perfect for kids, college students, or even some adults!</p>
            <br></br>
            <h1>Recipies:</h1>
            {recipes ? 
            (recipes.map(recipe => 
            <Recipe 
              name={recipe.recipeName}
              desc={recipe.recipeDescription}
              link={recipe.link}
              imagesrc={recipe.recipeImage}
            />
          )) : (
            <p> Loading Recipes...</p>
          )
        }
        </div>
    )
}