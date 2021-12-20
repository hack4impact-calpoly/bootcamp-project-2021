import React, {useState} from "react";
import './recipe.css'


export default function Recipe(props) {
    const [ingredients, setIngredients] = useState(props.ingredients);
    const [newIngredient, setNewIngredient] = React.useState('');
    const [steps, setInstructions] = useState(props.steps);
    const [newInstruction, setNewInstruction] = React.useState('');

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
            .then(setInstructions([...steps, newInstruction]))
            .catch(error => console.log("Failed to add instruction: ", error));
        }
      };

    return(
        <div>
            <section>
                <div className="flex-container">
                    <div className="flex-header">
                        <h2 id="recipeName">{props.name}</h2>
                        <p id="recipeDescription">{props.desc}</p>
                    </div>
                    <img id="recipeImage" class="flex-image" src={props.image}/>
                </div>
            </section>
            <section>
                <h3>Ingredients</h3>
                <p>Serves {props.size}</p>
                <ul id= "igList">
                    {ingredients.map(function(n, index){
                        return <li key={index}>{n}</li>;
                    })}
                </ul>
                <div class="form-group"> 
                    <h4> Add an Ingredient</h4>
                    <label for="newIngredient">Ingredient: </label>
                    <input id="newIngredient" 
                            class="form-element" 
                            placeholder="yummy stuff" 
                            value={newIngredient}
                            onChange={(e) => {
                    setNewIngredient(e.target.value);
                    }}
                    /> <br /> <br />
                    <button class="form-button" onClick={addIngredient}>Add Ingredient</button>
                </div>
            </section>
            <section>
                <h3>Preparation</h3>
                <p>Prep Time: 5 minutes</p>
                <ol id = "prep">
                    {steps.map(function(n, index){
                        return <li key={index}>{n}</li>;
                    })}
                </ol>
                <div class="form-group"> 
                    <h4> Add an Instruction</h4>
                    <div class="vertical-align">
                        <label for="newInstruction">Instruction: </label>
                        <input id="newInstruction" 
                               class="form-element" 
                               placeholder="Eat" 
                               value={newInstruction}
                               onChange={(e) => {
                                setNewInstruction(e.target.value);
                              }} /> <br /> <br />
                        <button class="form-button" onClick={addInstruction}>Add Instruction</button>
                    </div>
                </div>
            </section>
        </div>
    );
}