import React, { useState } from 'react';
import './recipePage.css'

export default function Recipe({name, image, ingredients, instructions}) {

    // state variable that stores ingredient within RecipePage component
    const [newIngredient, setNewIngredient] = React.useState('');
    const [newInstruction, setNewInstruction] = React.useState('');

    const addIngredient = () => {
        console.log(newIngredient)
        let ul = document.getElementById("ingredientList");
        let random = document.createElement("li");
        random.appendChild(document.createTextNode(newIngredient));
        ul.appendChild(random);
    }

    const addInstruction = () => {
        console.log(newInstruction)
        let ol = document.getElementById("instructionList");
        let random = document.createElement("li");
        random.appendChild(document.createTextNode(newInstruction));
        ol.appendChild(random);
    }

    return(
        <div>
            <div className="flex-container">
                <img id="recipeImage" src={image} className="flex-image" />
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
