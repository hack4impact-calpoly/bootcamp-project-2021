import recipes from '../recipeData';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import './pages.css';

function RecipePage() {

  let { id } = useParams();
    const [newIngredient, setNewIngredient] = useState('');//add this
    const [newStep, setNewStep] = useState('');//add this
    const r = recipes.find(recipe => recipe.name === id);

    let addIngredient = () => {
      let ul = document.getElementById("ingred-list");
      let newElem = document.createElement("li");
      let ingredient = document.getElementById("newIngredient").value;
      newElem.appendChild(document.createTextNode(ingredient));
      ul.appendChild(newElem);
  }

    let addStep = () => {
      let ul = document.getElementById("step-list");
      let newElem = document.createElement("li");
      let step = document.getElementById("newStep").value;
      newElem.appendChild(document.createTextNode(step));
      ul.appendChild(newElem);
  }

  return (
    <>
    <div id="page">
    <Navbar/>
    <h2 id="name">{r.name}</h2>
        <img id="image" src={r.imgSrc} width="200px"></img>
        <p id="description">{r.desc}</p>
        <div id="ingredients">
        <h4>Ingredients</h4>
            <ul id="ingred-list">
                {(r.ingred).map(ing => <li>{ing}</li>)}
            </ul>
            <input 
              id="newIngredient" 
              className="form-element" 
              placeholder="2 cups of spinach" 
              value={newIngredient} // add newIngredient as the input's value
              onChange={(e) => { // this event handler updates the value of newIngredient
              setNewIngredient(e.target.value);
              }}
            />
            <input type="button" class="button_playlist" value="Submit" onClick={addIngredient} />
        </div>
        <div id="steps">
        <h4>Steps</h4>
            <ol id="step-list">
              {(r.steps).map(s => <li>{s}</li>)}
            </ol>
            <input 
              id="newStep" 
              className="form-element" 
              placeholder="stir ingredients" 
              value={newStep} // add newIngredient as the input's value
              onChange={(e) => { // this event handler updates the value of newIngredient
              setNewStep(e.target.value);
              }}
            />
            <input type="button" class="button_playlist" value="Submit" onClick={addStep} />
       </div>
    </div>
    </>
  );
}

export default RecipePage;