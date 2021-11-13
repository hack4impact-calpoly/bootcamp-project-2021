import './recipe_page.css';
import Navbar from './navbar.jsx';
import React, { useState } from 'react';


function Recipe_page(prop) {

  //states for the ingrediants and instructions in list
  const [newIngredient, setNewIngredient] = React.useState('');
  const [newInstruction, setNewInstruction] = React.useState('');

  //functions that will add the input into the javaS object and then update the html
  let addIngr = () =>{
      prop.recipe.ingrediantList.push(newIngredient);
      setNewIngredient("");
      console.log(newIngredient);
  }

  let addInst = () =>{
    prop.recipe.instructionList.push(newInstruction);
    setNewInstruction("");
    console.log(newInstruction);
  }

  return (
    <div className="Recipe_page">
      <header className="App-header">

        {/* Title of recipe page with navbar below it*/}
        <div class="box">
          <div class="recipe_page_title">
            <h1 id="name">{prop.recipe.recipeName}</h1>
          </div>
        </div>
        <Navbar />

        {/* Descriptoin and image of recipe*/}
        <div class="image_text">
          <div class="welcome">
            <h3 id="description">{prop.recipe.recipeDescription}</h3>
          </div>
          <img id="top_img" src={prop.recipe.recipeImage} alt="mac" width="400"/><br />
        </div>


        <div class="ingrediants_title">
          <h2>Ingrediants:</h2>
        </div>

        {/* List of ingrediants with the object elements*/}
        <uli class="ingrediants_list" id="ingr">
          {prop.recipe.ingrediantList.map(
            function(name, index) {return <li key={index}>{name}</li>;})}
        </uli>

        <input id="newIngredient" className="form-element" placeholder="2 cups of spinach" 
          value={newIngredient} // add newIngredient as the input's value
          onChange={(e) => { // this event handler updates the value of newIngredient
            setNewIngredient(e.target.value);
          }}
        />
        <button onClick={addIngr}>Add Ingrediant to List</button>


        <div class="ingrediants_title">
          <h2>Directions:</h2>
        </div>
        <oli class="instructions_list" id="inst">
          {prop.recipe.instructionList.map(
            function(name, index) {return <li key={index}>{name}</li>;})}
        </oli>
        <input id="newInstruction" className="form-element" placeholder="2 cups of spinach" 
          value={newInstruction} // add newInstruction as the input's value
          onChange={(e) => { // this event handler updates the value of newIngredient
            setNewInstruction(e.target.value);
          }}
        />
        <button onClick={addInst}>Add Instruction to List</button>


      </header>
    </div>
  );

}

export default Recipe_page;
