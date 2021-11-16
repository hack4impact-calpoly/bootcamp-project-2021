import React, { useState } from "react";
import "./recipe.css";

export default function RecipePage({
  name,
  img,
  description,
  ingredients,
  directions,
}) {
  const [newIngredient, setNewIngredient] = useState("");
  const [newDirection, setNewDirection] = useState("");

  function addIngredient() {
    const ul = document.getElementById("ingredientList");
    const ingredient = document.getElementById("ingredientInput").value;
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
    console.log(newIngredient);
  }

  function addDirection() {
    const ol = document.getElementById("directionsList");
    const directions = document.getElementById("directionsInput").value;
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(directions));
    ol.appendChild(li);
    console.log(newDirection);
  }

  return (
    <>
    <div className="indiv-container">
      <div className="indiv-header">
        <h2 id="recipeName">{name}</h2>
        <p id="recipeDescription">{description}</p>
      </div>
      <img
        className="indiv-img"
        src={img}
        id="recipeImage"
        width="300px"
        height="300px"
        alt={name}
      />
    </div>
    <h4 className="sub-heading">Ingredients</h4>
    <ul id="ingredientList">
      {ingredients.map((ingr, ind) => (
        <li key={ind}>{ingr}</li>
      ))}
    </ul>
    <div className="input-container">
      <h4>Add an Ingredient</h4>
      <input
        id="ingredientInput"
        value={newIngredient}
        onChange={(e) => {
          setNewIngredient(e.target.value);
        }}
      />
      <br />
      <button onClick={addIngredient} className="add-btn">
        Add Ingredient
      </button>
    </div>
    <h4 className="sub-heading">Directions</h4>
    <ol id="directionsList">
      {directions.map((dir, ind) => (
        <li key={ind}>{dir}</li>
      ))}
    </ol>
    <div className="input-container">
      <h4>Add a Direction</h4>
      <textarea
        id="directionsInput"
        value={newDirection}
        onChange={(e) => {
          setNewDirection(e.target.value);
        }}
      ></textarea>
      <br />
      <button onClick={addDirection} className="add-btn">
        Add Direction
      </button>
    </div>
  </>

  );
}