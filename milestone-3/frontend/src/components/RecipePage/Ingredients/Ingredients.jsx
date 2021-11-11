import React from 'react';
import './Ingredients.css';

export default function Ingredients({ingredients}) {
  const [newIngredient, setNewIngredient] = React.useState('');//add this

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
      <p><b>Add step</b></p>
      <input 
        id="newIngredient" 
        className="form-element" 
        placeholder="2 cups of spinach" 
        value={newIngredient} // add newIngredient as the input's value
        onChange={(e) => { // this event handler updates the value of newIngredient
          setNewIngredient(e.target.value);
        }}
      />
    </div>
  );
}
