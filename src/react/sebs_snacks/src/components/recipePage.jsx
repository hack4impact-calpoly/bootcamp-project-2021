import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";

import "../images/carbonara.jpg";
import "../images/spaghetti.jpg";
import "../images/pestoPasta.jpg";

import "../stylesheets/recipePage.css";

export default function RecipeData(){
    let params = useParams(); //Gets the recipe from the routing URL, allows us to match the object data to the page
    let recipeName = params.recipeID;
    console.log(recipeName);

    //Handles the states for adding new Ingredient/Instruction
    const [newIngredient, setNewIngredient] = React.useState(''); //Stores information typed in input box
    const [newInstruction, setNewInstruction] = React.useState('');

    //Handles states for loading page
    let [recipe, setRecipe] = React.useState();
    

    useEffect(() => {
        const loadRecipe = () => {
            fetch(`http://localhost:3001/api/recipe/${recipeName}`)
            .then(res => res.json())
            .then(jsondata => setRecipe(jsondata))          
        }
        loadRecipe();
    },  []) //Empty brackets means run when page first loads

    return (
        <div>
            <Navbar />
            <body>
                <br/>
                    {recipe ? (
                        <div>
                            {console.log(recipe)}
                            <div className="recipeBox">
                                <div className="aboutmeDesc">
                                    <h1 id="recipeTitle">{recipe.title}</h1>
                                    <h4 id="recipeDesc">{recipe.desc}</h4>
                                    <h2 id="ingredients">Ingredients</h2>
                                    <div className="recipeIngredients">
                                        <ul id="recipeIngredientList">
                                        {recipe.ingredientList.map(function(currentValue, index) { {/* Builds ingredient list display from data*/}
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
                                                setNewIngredient(e.target.value);}} /> {/* Rerenders the page to display the character previously typed */}
                                        <button onClick={() => {addIngredient(recipe, newIngredient); setNewIngredient('')}}>Add ingredient to list</button> {/*Adds ingredient to lists, and clears input text field, updating the state, forcing the component to rerender*/}
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
                                        <button onClick={() => {addInstruction(recipe, newInstruction); setNewInstruction('')}}>Add instruction to list</button>
                                    </div>
                                </div>
                                <img id="recipePic" src={recipe.recipePic} alt={recipe.alt}/>
                            </div>
                        </div>
                    )
                        : (
                            <div>
                                {console.log("Loading...")}
                                <div className="recipeBox">
                                    <p> Loading.... </p>
                                </div>
                            </div>
                        )}
            </body>
        </div>
    )
}

function addIngredient (recipe, newIngredient) { //function adds "newIngredient" to ingredient array in recipeData 
    console.log(JSON.stringify({'newIngredient': newIngredient}));
    recipe.ingredientList.push(newIngredient);
    fetch(`http://localhost:3001/api/recipe/${recipe.name}/ingredient`, {
                method: 'PUT',
                body: JSON.stringify(
                {
                    "newIngredient": newIngredient
                })
            })
}

function addInstruction(recipe, newInstruction) { //function adds "newInstruction" to instruction array in recipeData
    console.log(newInstruction);
    recipe.instructionList.push(newInstruction)
    fetch(`http://localhost:3001/api/recipe/${recipe.name}/instruction`, {
                method: 'PUT',
                body: JSON.stringify(
                    { 
                        "newInstruction": newInstruction
                    })
            })
}