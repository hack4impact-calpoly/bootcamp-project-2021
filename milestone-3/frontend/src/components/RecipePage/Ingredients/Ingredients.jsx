import React from 'react';
import './Ingredients.css';
import recipes from '../../../recipeData.js';
const ingredients = [
  "1 cup milk or almond milk",
  "6 ounces Yoplait Original French Vanilla yogurt",
  "1/2 teaspoon lime zest",
  "Juice of one large lime",
  "1 cup fresh spinach",
  "1 cup frozen blackberries",
  "1 frozen banana"
];

export default function Ingredients({items}) {
  return (
    <div>
      <hr/>
      <h2>Ingredients</h2>
      <ul>
        {
          ingredients.map(function(ingredient){
            return <li>{ingredient}</li>;
          })
        }
      </ul>
    </div>
  );
}
