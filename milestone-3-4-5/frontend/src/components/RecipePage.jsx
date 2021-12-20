import React, { useState } from "react";
import styles from "../styles/RecipePage.module.css";

export default function RecipePage(props) {
  const [ingredients, setIngredients] = useState(props.ingredients);
  const [newIngredient, setNewIngredient] = useState("");
  const [instructions, setInstructions] = useState(props.instructions);
  const [newInstruction, setNewInstruction] = useState("");

  const addIngredient = async () => {
    if (newIngredient) {
      await fetch(`http://localhost:3001/api/recipe/${props.name}/ingredient`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newIngredient: newIngredient })
      })
        .then(setIngredients([...ingredients, newIngredient]))
        .catch(error => console.log("Failed to add ingredient: ", error));
    }
  };

  const addInstruction = async () => {
    if (newInstruction) {
      await fetch(
        `http://localhost:3001/api/recipe/${props.name}/instruction`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newInstruction: newInstruction })
        }
      )
        .then(setInstructions([...instructions, newInstruction]))
        .catch(error => console.log("Failed to add instruction: ", error));
    }
  };

  return (
    <div>
      <div className={styles.descContainer}>
        <img className={styles.img} src={`../${props.img}`} alt={props.name} />
        <div>
          <p className={styles.description}>{props.desc}</p>
        </div>
      </div>
      <br />
      <div className={styles.container}>
        <div>
          <h3>ingredients</h3>
          <ul id='ingredients'>
            {ingredients.map(ingredient => (
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
        {instructions.map(instruction => (
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
    </div>
  );
}
