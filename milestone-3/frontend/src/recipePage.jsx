import React, {useState, useEffect} from 'react';
import './recipePage.css';

export default function RecipePage({ image, name, desc, ingredients, steps}) {

  const [newIngredient, setNewIngredient] = React.useState('');
  const [newInstruction, setNewInstruction] = React.useState('');

  const addIngredient = () => {
    fetch(`http://localhost:3001/api/recipe/${name}/ingredients`, {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        method: 'PUT',
        body: JSON.stringify({newIngredient: newIngredient})
      }).then(response => response.json())
      .then(jsondata => setNewIngredient(jsondata))
  
    let ul = document.getElementById("ingredients");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newIngredient));
    ul.appendChild(li);
}

  const addInstruction = () => {
    fetch(`http://localhost:3001/api/recipe/${name}/instructions`, {
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({newInstruction: newInstruction})
        }).then(response => response.json())
        .then(jsondata => setNewInstruction(jsondata))
      
      let ol = document.getElementById("instructions");
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(newInstruction));
      ol.appendChild(li);
  }

  return (
    <div>
          <main class="content">
            <div>
                <div class="recipe-page-description">
                    <h1 id="Recipe_Name"> {name} </h1>
                    <p id="Recipe_Description">
                        <img id="Recipe_Image" src={image} alt="img"></img>
                        {desc}
                    </p>
                </div>
            </div>

            <div class="recipe">
                <div class="recipe-title">
                    <h3>Ingredients</h3>
                </div>
                <div class="recipe-content">
                    <p class="recipe-description">
                        <ul id="ingredients">
                        {ingredients.map(function(name, index){
                          return <li key={index}>{name}</li>;
                        })}
                        </ul>
                    </p>
                </div>
                <div class="form-group">
                    <label for="newIngredient">Ingredient: </label>
                    <input 
                      id="newIngredient" 
                      className="form-element" 
                      placeholder="2 cups of spinach" 
                      value={newIngredient}
                      onChange={(e) => {
                        setNewIngredient(e.target.value);
                      }}
                    />
                    <br/>
                    <br/>
                    <button onClick={addIngredient}>Add Ingredient</button>
                </div>
            </div>

            <div class="recipe">
                <div class="recipe-title">
                    <h3>Preparation</h3>
                </div>
                <div class="recipe-content">
                    <p class="recipe-description">
                        <ol id="instructions">
                        {steps.map(function(name, index){
                          return <li key={index}>{name}</li>;
                        })}
                        </ol>
                    </p>
                </div>
                <div class="form-group">
                    <label for="newInstruction">Instruction: </label>
                    <input 
                      id="newInstruction" 
                      className="form-element" 
                      placeholder="Heat until..." 
                      value={newInstruction}
                      onChange={(e) => {
                        setNewInstruction(e.target.value);
                      }}
                    />
                    <br/>
                    <br/>
                    <button onClick={addInstruction}>Add Instruction</button>
                </div>
            </div>
          </main>
    </div>
  );
}