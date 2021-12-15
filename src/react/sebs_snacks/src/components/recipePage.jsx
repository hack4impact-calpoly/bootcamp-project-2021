import React from "react";
import Navbar from "./navbar";
import "../stylesheets/recipePreview.css";

export default function RecipeData({title, desc, ingredientList, instructionList, recipePic, alt}){
    return (
        <div>
            <Navbar />
            <body>
                <div className="recipeBox">
                    <div className="aboutmeDesc">
                        <h1 id="recipeTitle">{title}</h1>
                        <h4 id="recipeDesc">{desc}</h4>
                        <h2 id="ingredients">Ingredients</h2>
                        <div className="recipeIngredients">
                            <ul id="recipeIngredientList">
                            {ingredientList.map(function(currentValue, index) {
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
                            {instructionList.map(function(currentValue, index) {
                                return <li key={index}>{currentValue}</li>;
                                })}
                            </ol>
                            <h4>Add an Instruction:</h4>
                            <input id="newRecipeInstruction" placeholder="Instruction" value=""/>
                            <button onclick="addInstruction('recipeInstructionList', 'newRecipeInstruction')">Add instruction to list</button>
                        </div>
                    </div>
                    <img id="recipePic" src={recipePic} alt={alt}/>
                </div>
            </body>
        </div>
    )
}