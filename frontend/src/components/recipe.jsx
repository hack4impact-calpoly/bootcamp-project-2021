import React, { useState, useEffect } from 'react';
import './recipe.css';

export default function Recipe({ name, desc, image, ingredients, steps }) {
    const [newIngredient, setNewIngredient] = React.useState('');
    const [postIngredient, setPostIngredient] = useState('');
    const [newStep, setNewStep] = React.useState('');
    const [postStep, setPostStep] = useState('');

    useEffect(() => {
        if (postIngredient === '') return;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newIngredient: postIngredient })
        };
        const updateIngredient = async () => {
            fetch('https://localhost:3001/api/recipe/${name}/ingredient', requestOptions)
                .then(console.log('New Ingredient Added to DB'))
                .catch(error => console.log(error));
        }
        updateIngredient();
    }, [postIngredient])

    useEffect(() => {
        if (postStep === '') return;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newStep: postStep })
        };
        const updateSteps = async () => {
            fetch('https://localhost:3001/api/recipe/${name}/step', requestOptions)
                .then(console.log('New Step added to DB'))
                .catch(error => console.log(error));
        }
        updateSteps();
    }, [postStep])

    const addIngredient = () => {
        console.log(newIngredient);
        var ul = document.getElementById("ingredient_list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newIngredient));
        ul.appendChild(li);
        setPostIngredient(newIngredient);
    }
    const addStep = () => {
        console.log(newStep);
        var ul = document.getElementById("step_list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newStep));
        ul.appendChild(li);
        setPostStep(newStep);
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