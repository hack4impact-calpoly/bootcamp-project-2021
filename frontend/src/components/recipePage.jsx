import { useState } from 'react';
import './recipePage.css'

export default function RecipePage( {name, img, desc, ingredients, steps} ) {

    const [newIngredient, setNewIngredient] = useState('');
    const [newStep, setNewStep] = useState('');

    const addIngredient = () => {
        let ul = document.getElementById("ingredientsList");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newIngredient));
        ul.appendChild(li);
    }
    
    function addStep() {
        let ol = document.getElementById("stepsList");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newStep));
        ol.appendChild(li);
    }


    return (
        <div>
            <div className="header-container">
                <div className="recipe-header-text">
                    <h2 className="recipe-header-title">{name}</h2>
                    <p className="recipe-header-desc">{desc}</p>
                </div>
                <div>
                    <img className="food-img" width="300px" height="300px" src={img} alt={name}/>  
                </div>
            </div>

            <div className="ingredients-container">
                <h3 class="title-text">Ingredients</h3>

                <ul id="ingredientsList">
                    {ingredients.map(function(element, index, arr){
                        return <li key={index}>{element}</li>
                    })}
                </ul>

                <div class="ingredient-form">
                    <h4>Add an Ingredient!</h4>
                    <i>Ingredient: </i>
                    <input 
                        id="newIngredient" 
                        class="ingredient-input" 
                        placeholder="Add your ingredient here" 
                        value={newIngredient}
                        onChange={
                            (event) => {setNewIngredient(event.target.value);}
                        }                   
                    />
                    <button class="form-button" onClick={addIngredient}>Add Ingredient</button>
                </div>
            </div>

            <div className="steps-container">
                <h3 class="title-text">Instructions: </h3>

                <ol id="stepsList">
                    {steps.map(function(element, index, arr){
                        return <li key={index}>{element}</li>
                    })}
                </ol>

                <div class="steps-form">
                    <h4>Add a Step!</h4>
                    <i>Step: </i>
                    <input 
                        id="newStep" 
                        className="step-input" 
                        placeholder="Add another step here" 
                        value={newStep}
                        onChange={
                            (event) => {setNewStep(event.target.value);}
                        }
                    />
                    <button class="form-button" onClick={addStep}>Add Step</button>
                </div>
            </div>
        </div>

    );
}