import React from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import { getRecipe } from "../recipeData";

import "../stylesheets/recipePage.css";

let recipe;

export default function RecipeData(){
    let params = useParams();
    recipe = getRecipe(params); //Gets the recipe object from the routing URL, allows us to access object data to populate the page
    const [newIngredient, setNewIngredient] = React.useState(''); //rerenders page when adding items to list by updating states
    const [newInstruction, setNewInstruction] = React.useState('');
    return (
        <div>
            <Navbar />
            <body>
                <br/>
                <div className="recipeBox">
                    <div className="aboutmeDesc">
                        <h1 id="recipeTitle">{recipe.title}</h1>
                        <h4 id="recipeDesc">{recipe.desc}</h4>
                        <h2 id="ingredients">Ingredients</h2>
                        <div className="recipeIngredients">
                            <ul id="recipeIngredientList">
                            {recipe.ingredientList.map(function(currentValue, index) {
                                return <li key={index}>{currentValue}</li>;
                                })}
                            </ul>
                            <h4>Add an Ingredient:</h4>
                            <input 
                                id="newIngredient" 
                                type="text"
                                className="form-element" 
                                placholder="Ingredient" 
                                value={newIngredient} 
                                onChange={(e) => {
                                    setNewIngredient(e.target.value);}} />
                            <button onClick={() => {addIngredient(newIngredient); setNewIngredient('')}}>Add ingredient to list</button> {/*Adds ingredient to lists, and clears input text field rerendering the component*/}
                        </div>

                        <h2 id="method">Instructions</h2>
                        <div className="recipeMethod">
                            <ol id="recipeInstructionList">
                            {recipe.instructionList.map(function(currentValue, index) {
                                return <li key={index}>{currentValue}</li>;
                                })}
                            </ol>
                            <h4>Add an Instruction:</h4>
                            <input 
                                id="newInstruction" 
                                type="text"
                                className="form-element" 
                                placholder="Instruction" 
                                value={newInstruction} 
                                onChange={(e) => {
                                    setNewInstruction(e.target.value);}} />
                            <button onClick={() => {addInstruction(newInstruction); setNewInstruction('')}}>Add instruction to list</button>
                        </div>
                    </div>
                    <img id="recipePic" src={recipe.recipePic} alt={recipe.alt}/>
                </div>
            </body>
        </div>
    )
}

function addIngredient (newIngredient) { //function adds "newIngredient" to ingredient array in recipeData 
    console.log(newIngredient);
    recipe.ingredientList.push(newIngredient);
}

function addInstruction(newInstruction) { //function adds "newInstruction" to instruction array in recipeData
    console.log(newInstruction);
    recipe.instructionList.push(newInstruction)
}