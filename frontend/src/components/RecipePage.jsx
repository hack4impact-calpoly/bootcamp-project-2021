import React, { useState } from "react";
import RecipeInput from "./recipeInput";
import "./recipePage.css";

export default function RecipePage({
  dishName,
  recipeDesc,
  image,
  ingredients,
  instructions,
}) {
  //ingredient hooks
  const [updatedIngredients, setIngredients] = useState(ingredients);
  const [newIngredient, setNewIngredient] = useState("");

  //instruction hooks
  const [updatedInstructions, setInstructions] = useState(instructions);
  const [newInstruction, setNewInstruction] = useState("");

  //adds newIngredient to the updatedIngredients list
  const addIngredient = () => {
    const newPut = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        newIngredient: newIngredient,
      }),
    };
    fetch(
      "http://localhost:3001/api/recipe/" + dishName + "/ingredient",
      newPut
    )
      .then((res) => res.json())
      .then((response) => console.log(response));

    setIngredients([...updatedIngredients, newIngredient]);
    setNewIngredient("");
  };

  //adds newInstruction to the updatedInstructions list
  const addInstruction = () => {
    const newPut = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        newInstruction: newInstruction,
      }),
    };
    fetch(
      "http://localhost:3001/api/recipe/" + dishName + "/instruction",
      newPut
    )
      .then((res) => res.json())
      .then((response) => console.log(response));

    setInstructions([...updatedInstructions, newInstruction]);
    setNewInstruction("");
  };

  //onChange for ingredients update field (passed into the recipeInput component)
  const ingredientOnChange = (e) => {
    setNewIngredient(e.target.value);
  };

  //onChange for instructions update field (passed into the recipeInput component)
  const instructionOnChange = (e) => {
    setNewInstruction(e.target.value);
  };

  return (
    <header>
      {/*Dish description section*/}
      <div class="row3">
        <div class="main3">
          <h2 id="dishName">{dishName}</h2>
          <p id="dishDesc">{recipeDesc}</p>
        </div>
        <div class="side3">
          <img src={image} alt={dishName} class="image_size3" id="dishPhoto" />
        </div>
      </div>
      {/*Dish ingredients section*/}
      <div>
        <h2>Ingredients</h2>
        <ul id="ingredients">
          {updatedIngredients.map(function (name, index) {
            return <li key={index}>{name}</li>;
          })}
        </ul>
        <label> Add ingredient</label> <br />
        <RecipeInput
          name="Ingredient"
          onChange={ingredientOnChange}
          addToList={addIngredient}
          newValue={newIngredient}
          placeholder="Why not garlic"
        />
      </div>
      {/*Dish instructions section*/}
      <div>
        <h2>Preparation</h2>
        <ol id="instructions">
          {updatedInstructions.map(function (name, index) {
            return <li key={index}>{name}</li>;
          })}
        </ol>
        <label> Add Instruction!</label> <br />
        <RecipeInput
          name="Instruction"
          onChange={instructionOnChange}
          addToList={addInstruction}
          newValue={newInstruction}
          placeholder="Make it again!"
        />
      </div>
    </header>
  );
}
