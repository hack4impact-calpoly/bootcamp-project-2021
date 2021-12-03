import React, {useState} from "react";
import './recipe.css'


export default function Recipe({name, desc, image, ingredients, steps, size}) {
    
    const [newIngredient, setNewIngredient] = React.useState('');
    const [newInstruction, setNewInstruction] = React.useState('');

    const addIngredient = () => {
        var ul = document.getElementById("igList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newIngredient));
        ul.appendChild(li);
    }
    const addInstruction = () => {
        var ol = document.getElementById("prep");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newInstruction));
        ol.appendChild(li);
    }

    return(
        <div>
            <section>
                <div class="flex-container">
                    <div class="flex-header">
                        <h2 id="recipeName">{name}</h2>
                        <p id="recipeDescription">{desc}</p>
                    </div>
                    <img id="recipeImage" class="flex-image" src={image}/>
                </div>
            </section>
            <section>
                <h3>Ingredients</h3>
                <p>Serves {size}</p>
                <ul id= "igList">
                    {ingredients.map(function(n, index){
                        return <li key={index}>{n}</li>;
                    })}
                </ul>
                <div class="form-group"> 
                    <h4> Add an Ingredient</h4>
                    <label for="newIngredient">Ingredient: </label>
                    <input 
                    id="newIngredient" 
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