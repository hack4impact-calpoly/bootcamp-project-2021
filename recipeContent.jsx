import React from 'react';
import HomePage from './homepage';
import PizzaPage from './pizza';
import SalmonPage from './salmon';
import PiePage from './pie';
import './style.css'


export default function RecipeContent({name, intro, image, route, ingredients, instructions}) {
  return (
      <main>
         <h1 id = "salmonHeader">{name}</h1>
         <br />
         <div className = "flexContainer">
            <img id = "foodImage" src = {image} width = "400px" />
            <div id = "salmonDescription">
               <p id = "foodDesc">{intro}</p>
            </div>
         </div>
         <br />
         <div className = "Ingredients">
               
            <h1>Ingredients</h1>
         </div>
         <div>
            <ul id = "salmonIngredients">
               {ingredients.map(function(name, index) {
                  return <li key={index}>{name}</li>;
               })}
            </ul>
         </div>

         <label className = "tab">Add ingredient</label>
         <input id = "newIngredient" placeholder="Add new ingredient" defaultValue = ""/>
         <button id = "addIngredientButton" >Add new ingredient to list</button>

         <div className = "Ingredients">
               
            <h1>Instructions</h1>
         </div>
         <ol id = "salmonInstructions">
            {instructions.map(function(name, index) {
               return <li key={index}>{name}</li>;
            })}
         </ol>

         <label className = "tab">Add instruction</label>
         <input id = "newInstruction" placeholder="Add new instruction" defaultValue = ""/>
         <button >Add new instruction to list</button>
      </main>
  );
}