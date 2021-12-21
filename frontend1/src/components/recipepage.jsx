import React, { useState, useEffect } from 'react';

import './style.css'

export default function RecipePage({name, imagesrc, ingredients, procedure}) {

    const [newIngredient, setNewIngredient] = useState('');
    const [newInstruction, setNewInstruction] = useState('');
    const [addIngredient, setAddIngredient] = useState('');
    const [addInstruction, setAddInstrction] = useState('');


    useEffect(() => {
        if (addIngredient === '') return;
        
        const init = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ newIngredient: addIngredient })
        };
        const updateIngredients = async () => {
          await fetch(`http://localhost:3001/api/recipe/${name}/ingredient`, init)
        }
        updateIngredients();
      }, [addIngredient])
    
    useEffect(() => {
        if (addInstruction === '') return;
    
        const init = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ newInstruction: addInstruction })
        };
        const updateInstrcutions = async () => {
          await fetch(`http://localhost:3001/api/recipe/${name}/instruction`, init)
        }
        updateInstrcutions();
      }, [addInstruction])

    function addNewIngredient() {
        let ul = document.getElementById("ingredient-list");
        let li = document.createElement("li");
        let newIngredient = document.getElementById("new-ingredient").value;
        li.appendChild(document.createTextNode(newIngredient));
        ul.appendChild(li)
        setAddIngredient(newIngredient)
    }
    
    function addNewInstruction() {
        let ol = document.getElementById("procedure-list");
        console.log(ol);
        let li = document.createElement("li");
        let newInstruction = document.getElementById("new-instruction").value;
        console.log(li);
        li.appendChild(document.createTextNode(newInstruction));
        ol.appendChild(li);
        setAddInstrction(newInstruction)
    }

    return (
        <div>
        <div className="flex-container">
            <section>
            <h2 className="header-text">{name}</h2>
            <img className="recipe-page-image" src={imagesrc} alt ="img"/>
            <div className="flex-item">
                <h3 className="ingredient-header">Ingredients:</h3>
                <ul className="ingredient-list">
                    {ingredients.map(function(name, index){
                    return <li key={index}>{name}</li>;
                    })}
                </ul>
            </div>
                <div className="ingredient-add">
                    <h4 className="ingredient-add">Add an Ingredient</h4>

                    <label className="ingredient-add" HTMLfor="new-ingredient">New Ingredient:</label>
                    <input id="new-ingredient" className="input-box" placeholder="1 pint ice cream" value={newIngredient} 
                    onChange={(e) => {setNewIngredient(e.target.value);}} />
                    <button className="add-button" onClick={addNewIngredient}>Add Ingredient</button>
                </div>
                </section>
            </div>
                <section>
                    <h2 id="procedure-head">Procedure</h2>
                    <ol id="procedure-list">
                        {procedure.map(function(name, index){
                            return <li key={index}>{name}</li>;
                        })}
                    </ol>
                    <div className="instruction-add">
                        <h3>Add an Instrctuion</h3>
                        <label for="new-instruction">New Instruction:</label>
                        <input id="new-instruction" className="input-box" placeholder="Eat it all!" value={newInstruction}
                        onChange={(e)=> {setNewInstruction(e.target.value)}}></input>
                        <button className="add-button" onClick={addNewInstruction}>Add Instruction</button>
                    </div>
                </section>
            </div>
    )
}