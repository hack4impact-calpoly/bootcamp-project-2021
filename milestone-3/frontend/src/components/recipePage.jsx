import React from 'react';
import './recipePage.css'

export default function RecipePage({recipeName, recipeDesc, imageSrc, ingredients, instructions}) {
  return (
    <div>
        {/* Introduction Section */}
        <div>
            <div class="recipeDescription">
                <h1>{recipeName}</h1>
                <p>{recipeDesc}</p>
            </div>
            <img src={imageSrc}/>
        </div>
        {/* Ingredients Section */}
        {/* Instruction Section */}
    </div>
  );
}