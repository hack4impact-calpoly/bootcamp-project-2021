import React, { useState } from "react";
import "./recipe.css";

export default function RecipePage({
  name,
  img,
  description,
  ingredients,
  instructions,
}) {
  const [newIngredient, setNewIngredient] = useState("");
  const [newInstruction, setNewInstruction] = useState("");

  function addIngredient()
  {
      const ul = document.getElementById("ingredientList");
      const ingredient = document.getElementById("addIngredient").value;
      console.log(ingredient); //logs in ingredient to the console above
      const li = document.createElement("li"); 
      li.appendChild(document.createTextNode(ingredient)); //appends to li block
      ul.append(li); //appends to ul block
      console.log(newIngredient);
  }
  
  function addInstruction()
  {
      const ol = document.getElementById("instructionList");
      const instruction = document.getElementById("addInstruction").value;
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(instruction)); //appends to li block
      ol.appendChild(li); //appends to ul block
      console.log(newInstruction);
      
  }

  return (
    <>
    <div className="indiv-recipeCont"></div>
    <div className="header">
        <h1 id="recipeName">{name}</h1>
        <p id="recipeDescription">{description}</p>
      <img
        className="recipe-img"
        src={img}
        id="recipeImage"
        width="300px"
        height="300px"
        alt={name}
      />
    </div>
    <h2 className="recipe-heading">Ingredients</h2>
    <ul id="ingredientList">
      {ingredients.map((ingr, ind) => (
        <li key={ind}>{ingr}</li>
      ))}
    </ul>
    <div className="flex-container">
      <h2>Add an Ingredient</h2>
      <input
        id="addIngredient"
        value={newIngredient}
        onChange={(e) => {
          setNewIngredient(e.target.value);
        }}
      />
      <br />
      <button onClick={addIngredient} className="contribute-btn">
        Add Ingredient
      </button>
    </div>
    <h2 className="recipe-heading">Instructions</h2>
    <ol id="instructionList">
      {instructions.map((dir, ind) => (
        <li key={ind}>{dir}</li>
      ))}
    </ol>
    <div className="flex-container">
      <h2>Add a Instruction</h2>
      <textarea
        id="addInstruction"
        value={newInstruction}
        onChange={(e) => {
          setNewInstruction(e.target.value);
        }}
      ></textarea>
      <br />
      <button onClick={addInstruction} className="contribute-btn">
        Add Instruction
      </button>
    </div>
  </>

  );
}