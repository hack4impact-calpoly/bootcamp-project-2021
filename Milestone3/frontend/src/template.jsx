
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './template.css'

export default function Template(props) {
    const [newIngredient, updateIngredient] = React.useState('');
    const [newInstruction, updateInstruction] = React.useState('');
    const addIngredient = () => {
        console.log(newIngredient)
        var ul = document.getElementById("ingredientlist");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newIngredient));
        li.setAttribute("class", "GHInfo");
        ul.appendChild(li);
    }
    const addInstruction = () => {
        console.log(newInstruction)
        var ul = document.getElementById("instructionlist");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newInstruction));
        li.setAttribute("class", "GHInfo");
        ul.appendChild(li);
    }

    return (
        <div>
            <p class="title">Michelle's Cookbook!</p>
            <p class="MealTitle">{props.name}</p>
            <img className="img" src={props.image} width="350" height="350"/>
            <p id="description" class="GHInfo">{props.description}</p>
            <br />
            <p class="MealTitle"> Ingredients</p>
            <div>
                <ul class="GHInfo" id="ingredientlist">
                    {props.ingredients.map(function(name, index) {
                        return <li key={index}>{name}</li>
                    })}
                </ul>
                <div className="Ingredient">
                    <h4> Add an Ingredient</h4>
                    <label>Ingredient: </label>
                    <input
                        id="newIngredient"
                        placeholder="3 handfuls of mushroom"
                        value={newIngredient}
                        onChange={(e) => {updateIngredient(e.target.value); }}
                    /> <br /> <br />
                    <button onClick={addIngredient}>Add Ingredient</button>
                </div>
                <br />
                <p class="MealTitle"> Steps</p>
                <ol class="GHInfo" id="instructionlist">
                    {props.steps.map(function(name, index) {
                        return <li key={index}>{name}</li>;
                    })}
                </ol>
                <div class="Ingredient">
                    <h4> Add an Instruction</h4>
                    <div>
                        <label>Instruction: </label>
                        <input
                            id="newInstruction"
                            placeholder="Sprinkle with salt."
                            value={newInstruction}
                            onChange={(e) => {updateInstruction(e.target.value); }}
                        /> <br /> <br />
                    </div>
                    <button onClick={addInstruction}>Add Instruction</button>
                </div>
            </div>
        </div>
    )
}