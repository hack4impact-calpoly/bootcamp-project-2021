import React, { useState } from 'react';
import './recipePage.css';

export default function RecipePage(props) {
   const [newIngredient, setNewIngredient] = useState('');
   const [newInstruction, setNewInstruction] = useState('');

   let addIngredient = (newIngredient) => {
      let ingredientList = document.getElementById("ingredientList");
      let newListItem = document.createElement("li");
      newListItem.appendChild(document.createTextNode(newIngredient));
      ingredientList.appendChild(newListItem);
  }

  let addInstruction = (newInstruction) => {
   let instructionList = document.getElementById("instructionList");
   let newListItem = document.createElement("li");
   newListItem.appendChild(document.createTextNode(newInstruction));
   instructionList.appendChild(newListItem);
}

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
            <button type="button" onClick={ () => addIngredient(newIngredient) }>
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

         <form>
            <textarea
               id="inputInstructions"
               spellCheck="true"
               placeholder="e.g. Put the sugar in the bowl"
               value={newInstruction}
               onChange={(e) => {
                  setNewInstruction(e.target.value);
               }}
            />
            <button type="button" onClick={ () => addInstruction(newInstruction) }>
               Add instruction
            </button>
         </form>
      </main>
   );
}