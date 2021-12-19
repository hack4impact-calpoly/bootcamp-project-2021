import React, { useState } from "react";
import "./recipe.css";

export default function RecipePage({
  name,
  img,
  description,
  ingredients,
  directions,
  updateRecipe
}) {
  const [newIngredient, setNewIngredient] = useState("");
  const [newDirection, setNewDirection] = useState("");

  const handleSubmitIngredient = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/recipe/${name}/ingredient`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [`newIngredient`]: newIngredient }),
    }).then(() =>
      fetch("http://localhost:3001/api/recipe")
        .then((res) => res.json())
        .then((data) => console.log(data))
    ).then(() => updateRecipe());
  };

  const handleSubmitDirection = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/recipe/${name}/direction`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [`newDirection`]: newDirection }),
    }).then(() =>
      fetch("http://localhost:3001/api/recipe")
        .then((res) => res.json())
        .then((data) => console.log(data))
    ).then(() => updateRecipe());
  };

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
      <p style={{ margin: "10px" }}>Yields 4 Servings</p>
      <ul id="ingredientList">
        {ingredients.map((ingr, ind) => (
          <li key={ind}>{ingr}</li>
        ))}
      </ul>
      <div className="input-container">
        <h4>Add an Ingredient</h4>
        <form onSubmit={handleSubmitIngredient}>
          <input
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <br />
          <input type="submit" value="Add Ingredient" className="add-btn" />
        </form>
      </div>
      <h4 className="sub-heading">Directions</h4>
      <ol id="directionsList">
        {directions.map((dir, ind) => (
          <li key={ind}>{dir}</li>
        ))}
      </ol>
      <div className="input-container">
        <h4>Add a Direction</h4>
        <form onSubmit={handleSubmitDirection}>
          <textarea
            type="text"
            value={newDirection}
            onChange={(e) => setNewDirection(e.target.value)}
          />
          <br />
          <input type="submit" value="Add Direction" className="add-btn" />
        </form>
      </div>
    </>
  );
}
