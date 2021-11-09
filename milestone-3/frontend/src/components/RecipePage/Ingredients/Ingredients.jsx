import React from 'react';
import './Ingredients.css';

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
