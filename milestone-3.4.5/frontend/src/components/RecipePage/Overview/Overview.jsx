import React from 'react';
import './Overview.css';

export default function Overview({recipe}) {
  return (
    <div className="overview">
      {recipe ? (
        <div>
          <img className="recipeImage" src={recipe.recipeImage} alt={recipe.recipeName}/>
          <h1 className="recipeName">{recipe.recipeName}</h1>
          <i>{'[Recipe from ' + recipe.recipeSource + ']'}</i><br/>
          <p className="recipeDescription">{recipe.recipeDescription}</p>
        </div>
        ) : (
          <p> Loading ...</p>
        )
      }
    </div>
  );
}
