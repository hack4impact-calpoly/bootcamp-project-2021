import './recipePage.css';
import React, { useState } from 'react';

export default function RecipePage({name, desc, image, ingredients, steps}) {
  const [anIngredient, setNewIngredient] = React.useState('');
  const [anInstruction, setNewInstruction] = React.useState('');

  const addIngredient = () => {
    console.log(anIngredient)
    var ul = document.getElementById("ingredientList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(anIngredient));
    ul.appendChild(li);
  }

  const addInstruction = () => {
    console.log(anInstruction)
    var ol = document.getElementById("instructionList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(anInstruction));
    ol.appendChild(li);
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
