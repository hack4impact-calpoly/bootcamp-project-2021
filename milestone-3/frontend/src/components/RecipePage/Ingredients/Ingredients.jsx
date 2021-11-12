import React from 'react';

export default function Ingredients({ingredients}) {
  return (
    <div>
      <hr/>
      <h2>Ingredients</h2>
      <ul>
        {
          ingredients.map(function(ingredient){
            return <li key={ingredient}>{ingredient}</li>;
          })
        }
      </ul>
    </div>
  );
}
