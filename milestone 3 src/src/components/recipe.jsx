import React from 'react';
import './recipe.css';

export default function Recipe({ name, desc, image, ingredients, steps }) {
    const [newIngredient, setNewIngredient] = React.useState('');
    const [newStep, setNewStep] = React.useState('');

    const addIngredient = () => {
        console.log(newIngredient);
        var ul = document.getElementById("ingredient_list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newIngredient));
        ul.appendChild(li);
    }
    const addStep = () => {
        console.log(newStep);
        var ul = document.getElementById("step_list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newStep));
        ul.appendChild(li);
    }

    return (
        <div>
            <div>
                <h1 id="name">{name}</h1>
            </div>
            <div class="recipe-content">
                <img id="image" class="pic"
                    src={image}>
                </img>
                <div>
                    <p id="description">{desc}</p>
                </div>
            </div>
            <div class="Ingredients_Steps">
                <div class="ingredients">
                    <h1>Ingredients</h1>
                    <ul id="ingredient_list">
                        {ingredients.map(function (name, index) {
                            return <li key={index}>{name}</li>
                        })}
                    </ul>
                    <input
                        id="ingredient_input"
                        value={newIngredient}
                        onChange={(e) => {
                            setNewIngredient(e.target.value);
                        }}
                    />
                    <button id="add_ingredient" onClick={addIngredient}>Click to add ingredient!</button>
                </div>
                <div class="steps">
                    <h1>Steps</h1>
                    <ol id="step_list">
                        {steps.map(function (name, index) {
                            return <li key={index}>{name}</li>;
                        })}
                    </ol>
                    <input
                        id="step_input"
                        value={newStep}
                        onChange={(e) => {
                            setNewStep(e.target.value);
                        }}
                    />
                    <button id="add_step_button" onClick={addStep}>Click to add step!</button>
                </div>
            </div>
        </div>
    );
}