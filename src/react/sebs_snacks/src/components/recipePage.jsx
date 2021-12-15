import React from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import { getRecipe } from "../recipeData";
import "../stylesheets/recipePage.css";

export default function RecipeData({title, desc, ingredientList, instructionList, recipePic, alt}){
    let params = useParams();
    let recipe = getRecipe(params);
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
                            <input id="newRecipeIngredient" placeholder="Ingredient" value=""/>
                            <button onclick="addIngredient('recipeIngredientList', 'newRecipeIngredient')">Add ingredient to list</button>
                        </div>

                        <h2 id="method">Instructions</h2>
                        <div className="recipeMethod">
                            <ol id="recipeInstructionList">
                            {recipe.instructionList.map(function(currentValue, index) {
                                return <li key={index}>{currentValue}</li>;
                                })}
                            </ol>
                            <h4>Add an Instruction:</h4>
                            <input id="newRecipeInstruction" placeholder="Instruction" value=""/>
                            <button onclick="addInstruction('recipeInstructionList', 'newRecipeInstruction')">Add instruction to list</button>
                        </div>
                    </div>
                    <img id="recipePic" src={recipe.recipePic} alt={recipe.alt}/>
                </div>
            </body>
        </div>
    )
}