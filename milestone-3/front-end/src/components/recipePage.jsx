import React, { useState } from 'react';
import './recipePage.css';

export default function RecipePage(props) {
   const [newIngredient, setNewIngredient] = useState('');

   return (
      <main id="main">
         <h1 id="recipeName">{ props.recipeName }</h1>
         <h3 id="recipeSubtitle">{ props.recipeSubtitle }</h3>
         <p id="recipeDescription">{ props.recipeDescription }</p>
         
         <img id="recipeImage" className="recipeImage" src={ props.recipeImage } alt={ props.imageAlt } />

         <h2>Ingredients</h2>
         <ul id="ingredientList">
            {
               props.ingredientList.map(function(name, index) {
                  return <li key={ index }>{ name }</li>;
               })
            }
         </ul>
         <form>
            <input
               type="text"
               id="inputIngredient"
               placeholder="e.g. 1/2 cup of flour"
               value={newIngredient}
               onChange={(e) => {
                  setNewIngredient(e.target.value);
               }}
            />
            <button type="button" onClick={ () => console.log(newIngredient) }>
               Add ingredient
            </button>
         </form>

         <h2>Instructions</h2>
         <ol id="instructionList">
            {
               props.instructionList.map(function(name, index) {
                  return <li key={ index }>{ name }</li>;
               })
            }
         </ol>

         <textarea id="inputInstructions" spellCheck="true" placeholder="e.g. Put the sugar in the bowl"></textarea>
         <button onClick="addInstruction()">Add instruction</button>
      </main>
   );
}