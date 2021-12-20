import React, { useState, useEffect } from "react";
import "./recipePage.css";

export default function RecipePage(props) {
  const [newIngredient, setNewIngredient] = useState("");
  const [newInstruction, setNewInstruction] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [ingredientList, setIngredientList] = useState(props.ingredientList);
  const [instructionList, setInstructionList] = useState(props.instructionList);

  // Load all recipes
  useEffect(() => {
    const getRecipe = async () => {
      let res = await fetch(
        `http://localhost:3001/api/recipe/${props.recipeName}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      setRecipe(await res.json());
    };
    getRecipe();
  }, [props.recipeName, ingredientList, instructionList]);

  let addIngredient = async () => {
    await fetch(
      `http://localhost:3001/api/recipe/${props.recipeName}/ingredient`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          newIngredient,
        }),
      }
    );
    setIngredientList([...ingredientList, newIngredient]);
  };

  let addInstruction = async () => {
    await fetch(
      `http://localhost:3001/api/recipe/${props.recipeName}/instruction`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          newInstruction,
        }),
      }
    );
    setInstructionList([...instructionList, newInstruction]);
  };

  return (
    <main id="main">
      <h1 id="recipeName">{props.recipeName}</h1>
      <h3 id="recipeSubtitle">{props.recipeSubtitle}</h3>
      <p id="recipeDescription">{props.recipeDescription}</p>

      <img
        id="recipeImage"
        className="recipeImage"
        src={props.recipeImage}
        alt={props.imageAlt}
      />

      <h2>Ingredients</h2>
      <ul id="ingredientList">
        {ingredientList.map(function (name, index) {
          return <li key={index}>{name}</li>;
        })}
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
        <button type="button" onClick={() => addIngredient()}>
          Add ingredient
        </button>
      </form>

      <h2>Instructions</h2>
      <ol id="instructionList">
        {instructionList.map(function (name, index) {
          return <li key={index}>{name}</li>;
        })}
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
        <button type="button" onClick={() => addInstruction()}>
          Add instruction
        </button>
      </form>
    </main>
  );
}
