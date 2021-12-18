import React from 'react';

export default function Ingredients({recipe}) {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {recipe ? (
          recipe.ingredientList.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>
          })) : (
            <p> Loading ...</p>
          )
        }
      </ul>
    </div>
  );
}
