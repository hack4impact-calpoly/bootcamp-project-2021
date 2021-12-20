import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import './pages.css';

function RecipePage() {

    let { id } = useParams();
    const [newIngredient, setNewIngredient] = useState('');//add this
    const [newStep, setNewStep] = useState('');//add this
    const [recipe, setRecipe] = useState();

    async function addIngredient() {
      let ingredient = document.getElementById("newIngredient").value;
      const rawResponse = await fetch('http://localhost:3001/api/recipe/' + id + '/ingredient', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({newIngredient : ingredient})
      });
      setNewIngredient('');
    }

    async function addStep() {
      let step = document.getElementById("newStep").value;
      const rawResponse = await fetch('http://localhost:3001/api/recipe/' + id + '/instruction', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({newInstruction : step})
      });
      setNewStep('');
    }

  useEffect(() => {
    const loadRecipe = () => {
       fetch('http://localhost:3001/api/recipe/' + id)
      .then(res => res.json())
      .then(jsondata => setRecipe(jsondata));
    }
    loadRecipe();
  }, [id, newIngredient, newStep])

  return (
    <>
    <div id="page">
    <Navbar/>
    {recipe ? (<h2 id="name">{recipe.recipeName}</h2>) : (<p>Loading</p>)}
    {recipe ? (<img id="image" src={recipe.recipeImage} width="200px"></img>) : (<p>Loading</p>)}
    {recipe ? (<p id="description">{recipe.previewDesc}</p>) : (<p>Loading</p>)}
        <div id="ingredients">
        <h4>Ingredients</h4>
            <ul id="ingred-list">
                {recipe ? (recipe.ingredientList).map(ing => <li>{ing}</li>) : (<p>Loading</p>)}
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
              {recipe ?  (recipe.steps).map(s => <li>{s}</li>) : (<p>Loading</p>)}
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