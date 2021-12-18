import React, { useState } from "react";
import styles from "../styles/RecipePage.module.css";
import { useParams } from "react-router-dom";
import { getRecipe } from "../recipeData";

export default function RecipePage() {
  let params = useParams();
  let recipe = getRecipe(params.name);
  const [newIngredient, setNewIngredient] = useState("");
  const [newInstruction, setNewInstruction] = useState("");

  function addIngredient() {
    console.log(newIngredient);
    let ul = document.getElementById("ingredients");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newIngredient));
    ul.appendChild(li);
  }

  function addInstruction() {
    console.log(newInstruction);
    let ol = document.getElementById("instructions");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newInstruction));
    ol.appendChild(li);
  }

  function convertToJSON() {
    let div = document.getElementById("jsonConverter");
    let pre = document.createElement("pre");
    let code = document.createElement("code");
    code.appendChild(
      document.createTextNode(JSON.stringify(recipe, null, " "))
    );
    pre.appendChild(code);
    div.appendChild(pre);
  }

  return (
    <div>
      <div className={styles.descContainer}>
        <img
          className={styles.img}
          src={`../${recipe.recipeImage}`}
          alt={recipe.recipeName}
        />
        <div>
          <p className={styles.description}>{recipe.recipeDescription}</p>
        </div>
      </div>
      <br />
      <div className={styles.container}>
        <div>
          <h3>ingredients</h3>
          <ul id='ingredients'>
            {recipe.ingredientList.map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <h4>add ingredient</h4>
          <input
            id='newIngredient'
            placeholder='30 marshmallows'
            className='form-element'
            value={newIngredient}
            onChange={e => {
              setNewIngredient(e.target.value);
            }}
          />
          <button onClick={addIngredient}>add ingredient to list</button>
        </div>
      </div>
      <h3>instructions</h3>
      <ol id='instructions'>
        {recipe.instructionList.map(instruction => (
          <li>{instruction}</li>
        ))}
      </ol>
      <textarea
        id='newInstruction'
        placeholder='share with your dog'
        className='form-element'
        value={newInstruction}
        onChange={e => {
          setNewInstruction(e.target.value);
        }}
      ></textarea>
      <br />
      <button onClick={addInstruction}>add instruction to list</button>
      <p>
        <a href='https://www.chopstickchronicles.com/japanese-melon-bread/'>
          source if you're interested
        </a>
      </p>
      <div id='jsonConverter'>
        <button onClick={convertToJSON}>make page into JSON</button>
      </div>
    </div>
  );
}
