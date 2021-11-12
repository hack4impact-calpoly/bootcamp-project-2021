import React, { useState } from "react";
import './recipe.css';

export default function Recipe(props) {

    // ingredients list
    const [ingredients, setIngredients] = useState(props.recipe.ingredients);
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredientPos, setIngredientPos] = useState(ingredients.length);

    // instructions list
    const [instructions, setInstructions] = useState(props.recipe.instructions);
    const [newInstruction, setNewInstruction] = useState('');
    const [instructionPos, setInstructionPos] = useState(instructions.length);

    const addIngredient = () => {
        if (newIngredient.trim().length !== 0) {
            const newIngredients = [...ingredients];
            newIngredients.splice(ingredientPos > ingredients.length ? ingredients.length : ingredientPos, 0, newIngredient.trim());
            setIngredients(newIngredients);
            setNewIngredient('');
            setIngredientPos(ingredients.length + 1);
            console.log(newIngredient);
        }
    };

    const addInstruction = () => {
        if (newInstruction.trim().length !== 0) {
            const newInstructions = [...instructions];
            newInstructions.splice(instructionPos > instructions.length ? instructions.length : instructionPos, 0, newInstruction.trim());
            setInstructions(newInstructions);
            setNewInstruction('');
            setInstructionPos(instructions.length + 1);
            console.log(newInstruction);
        }
    };

    const deleteIngredient = (index) => {
        if (window.confirm("Are you sure you want to remove this?")) {
            const newIngredients = [...ingredients];
            newIngredients.splice(index, 1);
            setIngredients(newIngredients);
            setIngredientPos(ingredients.length - 1);
        }
    };

    const deleteInstruction = (index) => {
        if (window.confirm("Are you sure you want to remove this?")) {
            const newInstructions = [...instructions];
            newInstructions.splice(index, 1);
            setInstructions(newInstructions);
            setInstructionPos(instructions.length - 1);
        }
    };

    return (
        <main>
            <div className="FlexContainer">
                <div><img className="FlexImage" src={props.recipe.image} alt={props.recipe.description} /></div>
                <div className="FlexContent">
                    <h1>{props.recipe.name}</h1>
                    <p>{props.recipe.description}</p>
                    <h2>Ingredients</h2>
                    <ul>
                        {ingredients.map((ingredient, index) => {
                            return (
                                <li key={index} onClick={() => deleteIngredient(index)}>{ingredient}</li>
                            );
                        })}
                    </ul>
                    <div className="FormGroup">
                        <h3>Add an Ingredient</h3>
                        <label htmlFor="newIngredient">Ingredient: </label>
                        <input
                            type="text"
                            id="newIngredient"
                            placeholder="2 cups of spinach"
                            value={newIngredient}
                            onChange={e => {
                                setNewIngredient(e.target.value);
                            }}
                        />
                        <label htmlFor="ingredientPos">{`Position (0-${ingredients.length}): `}</label>
                        <input
                            type="number"
                            id="ingredientPos"
                            placeholder="0"
                            min="0"
                            max={ingredients.length}
                            value={ingredientPos}
                            onChange={e => {
                                setIngredientPos(e.target.value);
                            }}
                        />
                        <br />
                        <button className="FormButton" onClick={addIngredient}>Add Ingredient</button>
                    </div>
                </div>
            </div>
            <h2>Preparation</h2>
            <ol id="instructions">
                {instructions.map((instruction, index) => {
                    return (
                        <li key={index} onClick={() => deleteInstruction(index)}>{instruction}</li>
                    );
                })}
            </ol>
            <div className="FormGroup">
                <h3>Add an Instruction</h3>
                <label htmlFor="newInstruction">Instruction: </label>
                <input
                            type="text"
                            id="newInstruction"
                            placeholder="Pour and Serve!"
                            value={newInstruction}
                            onChange={e => {
                                setNewInstruction(e.target.value);
                            }}
                        />
                <label htmlFor="instructionPos">{`Position (0-${instructions.length}): `}</label>
                <input
                    type="number"
                    id="instructionPos"
                    placeholder="0"
                    min="0"
                    max={instructions.length}
                    value={instructionPos}
                    onChange={e => {
                        setInstructionPos(e.target.value);
                    }}
                />
                <br />
                <button className="FormButton" onClick={addInstruction}>Add Instruction</button>
            </div>
        </main>
    );
}