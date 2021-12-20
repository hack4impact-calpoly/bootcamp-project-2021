import React, { useState } from 'react';
import './recipePage.css'

export default function Recipe({name, image, ingredients, instructions}) {

    // state variable that stores ingredient within RecipePage component    
    const [newIngredient, setNewIngredient] = useState('');
    const [newInstruction, setNewInstruction] = useState('');

    let addIngredient = () => {
        let Obj = {newIngredient: newIngredient}
        fetch(`/api/recipe/${name}/ingredient`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              method: 'PUT',
              body: JSON.stringify(Obj)
          }).then(response => response.json())
          .then(jsondata => setNewIngredient(jsondata))
        // updating frontend list of ingredients
        let ul = document.getElementById("ingredientList");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newIngredient));
        ul.appendChild(li);
    }

    const addInstruction = () => {
        let Obj = {newInstruction: newInstruction}
        fetch(`/api/recipe/${name}/instruction`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              method: 'PUT',
              body: JSON.stringify(Obj)
          }).then(response => response.json())
          .then(jsondata => setNewInstruction(jsondata))
        // updating frontend list of instructions
        let ol = document.getElementById("instructionList");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newInstruction));
        ol.appendChild(li);
    }

    return(
        <div>
            <div className="flex-container">
                <img id="recipeImage" src={image} className="flex-image" alt={name}/>
                    <div className="flex-header">
                        <div className="ingredients">
                            <h1 className="dish-size">{name}</h1>
                            <h2>Ingredients</h2>
                            <ul id="ingredientList">
                                {ingredients.map(function(name, index){
                                    return <li key={index}>{name}</li>;
                                })}
                            </ul>
                            <div className="form-group">
                                <h4>Add Ingredient</h4>
                                <input 
                                    id="newIngredient" 
                                    placeholder="New ingredient!" 
                                    value={newIngredient}   // add newIngredient as the input's value
                                    onChange={(e) => {
                                        setNewIngredient(e.target.value);
                                    }}
                                />
                                {/* Check this here */}
                                <button onClick={addIngredient}>Add ingredient to list</button>
                            </div>
                        </div>
                    </div>
            </div>
                <div className="flex-header2">
                    <div className="ingredients2">
                        <h2>Preparation</h2>
                        <ol id="instructionList">
                            {instructions.map(function(name, index){
                                return <li key={index}>{name}</li>;
                            })}
                        </ol>
                        <div className="form-group">
                            <h4>Add Instruction</h4>
                            <textarea 
                                id="newInstruction" 
                                placeholder="New instruction!" 
                                value={newInstruction}  // add newInstruction as the text area's value
                                onChange={(e) => {
                                    setNewInstruction(e.target.value);
                                }}
                            />
                            <button onClick={addInstruction}>Add instruction to list</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}