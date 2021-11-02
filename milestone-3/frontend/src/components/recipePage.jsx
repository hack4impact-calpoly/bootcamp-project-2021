import React from 'react';
import './recipePage.css'

export default function RecipePage({recipeName, recipeDesc, imageSrc, ingredients, servingSize, instructions}) {
  return (
    <div>
        {/* Introduction Section */}
        <div className='recipeDescription'>
            <div className='recipeText'>
                <h1 className='title'>{recipeName}</h1>
                <p>{recipeDesc}</p>
            </div>
            <img className='recipeImage' src={imageSrc} alt='good-food' height='300' width='400'/>
        </div>
        {/* Ingredients Section */}
        <div className='ingredients'>
          <h1 className='header title'>Ingredients</h1>
          <h2 className='header contents'>Serving Size: {servingSize}</h2>
          <IngredientsList ingredients={ingredients} className='contents'/>
        </div>
        {/* Instruction Section */}
        <div class='ingredients'>
          <h1 class='header title'>Instructions</h1>
          <InstructionsList instructions={instructions} className='contents' />
        </div>
    </div>
  );
}

function IngredientsList({ ingredients }) {
  const ingredientList = ingredients.map((ingredient) =>
    <li key={ingredient}>{ingredient}</li>
  );
  return (
    <ul>{ingredientList}</ul>
  );
}

function InstructionsList({ instructions }) {
  const instructionList = instructions.map((instruction) =>
    <li key={instruction}>{instruction}</li>
  );
  return (
    <ol>{instructionList}</ol>
  );
}