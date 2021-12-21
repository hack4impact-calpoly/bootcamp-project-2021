import './recipePage.css';
import React, { useState, useEffect } from 'react';

export default function RecipePage({name, desc, image, ingredients, steps}) {
  const [recipes, setRecipes] = React.useState();
  const [ingredientList, setIngredientList] = React.useState('');
  const [anIngredient, setNewIngredient] = React.useState('');
  const [step, setSteps] = React.useState(' ');
  const [anInstruction, setNewInstruction] = React.useState('');



  const addIngredient = async() => {
    await fetch(`http://localhost:3001/api/recipe/${name}/ingredient`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({newIngredient: anIngredient})
    })

  }

  const addInstruction = async() => {
    await fetch(`http://localhost:3001/api/recipe/${name}/instruction`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({newInstruction: anInstruction})
    })
  }

  return (
    <div>
    <main>
      <h2 id = "rname">{name}</h2>
      <div class="intro">
        <p class="intro-body" id="desc">{desc}</p>
        <img id = "recipeImg" class="rec-img" src={image} alt=" "/>
      </div>

      <div class="ingredients">
        <h3>Ingredients</h3>
        <p class="ingredient-list">
          <ul id="ingredientList">
            {ingredients.map(function(name, index){
              return <li key={index}>{name}</li>;
            })}
          </ul>
          <div class="ingredient-add">
            <h4>Add an ingredient</h4>
              <label for="addIngredient">Add Ingredient:</label>
              <input id="addIngredient"
                class="form-element"
                value={anIngredient}
                onChange={(e) => {
                  setNewIngredient(e.target.value);
                }}
              />
            <button class="button" onClick= {addIngredient}>Add Ingredient</button>
          </div>
        </p>
      </div>

      <div class="preperation">
        <h3>Cooking Intructions</h3>
        <p class="prep-method">
          <ol id="instructionList">
            {steps.map(function(name, index){
              return <li key={index}>{name}</li>;
            })}
          </ol>
          <div class="ingredient-add">
            <h4>Add an Instructions</h4>
              <label for="addInstruction">Add Instruction:</label>
              <textarea
                id="addInstruction"
                class="form-element"
                value={anInstruction}
                rows="3"
                onChange={(e) => {
                  setNewInstruction(e.target.value);
                }}
                ></textarea>
            <button class="button" onClick= {addInstruction}>Add Ingredient</button>
          </div>
        </p>
      </div>
    </main>
	  </div>
  );
}
