import "./recipePage.css";
import React, { useState, useEffect } from 'react';
import Navbar from "./navBar";

export default function RecipePage({
  name,
  description,
  imageSrc,
  ingredientList,
  instructions,
  link,
  courtesyOf,
}) {
  const [newIngredient, setNewIngredient] = React.useState("");
  const [addIngredient, setAddIngredient] = useState("");
  const [newInstruction, setNewInstruction] = React.useState("");
  const [addInstruction, setAddInstrction] = useState("");

  useEffect(() => {
    if (addIngredient === '') return;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ addIngredient: addIngredient })
    };
    const updateIngredients = async () => {
      fetch(`http://localhost:3001/api/recipe/${name}/ingredient`, requestOptions)
    }
    updateIngredients();
  }, [addIngredient])

  useEffect(() => {
    if (addInstruction === '') return;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newInstruction: addInstruction })
    };
    const updateInstrcutions = async () => {
      fetch(`http://localhost:3001/api/recipe/${name}/instruction`, requestOptions)
    }
    updateInstrcutions();
  }, [addInstruction])

  const addToList = () => {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
    setAddIngredient(newIngredient)
  };

  const addToListInstruction = () => {
    var ul = document.getElementById("instructions");
    var li = document.createElement("li");
    var instruction = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(instruction));
    ul.appendChild(li);
    setAddInstrction(newInstruction)
  };

  let recipeInfo = {};
  function recipeToJSON() {
    recipeInfo.recipeName = document.getElementById("recipeName").innerHTML;
    recipeInfo.recipeDescription =
      document.getElementById("description").innerHTML;
    recipeInfo.personalImage = document.getElementById("personalImage").src;
    recipeInfo.recipeLink = document.getElementById("url").href;

    var ingredientList = [];
    var liTags = document.getElementById("list").getElementsByTagName("li");
    for (var key of Object.keys(liTags)) {
      ingredientList.push(liTags[key].innerHTML);
    }
    recipeInfo.ingredients = ingredientList;

    var instructions = [];
    liTags = document
      .getElementById("instructions")
      .getElementsByTagName("li");
    for (key of Object.keys(liTags)) {
      instructions.push(liTags[key].innerHTML);
    }
    recipeInfo.instructions = instructions;

    document.getElementById("json").textContent = JSON.stringify(
      recipeInfo,
      undefined,
      2
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/1265594.png')`,
        backgroundSize: `50%`,
      }}
    >
      <Navbar />
      <script type="text/javascript" src="recipeJS.js"></script>
      <div>
        <p id="recipeName" className="title">
          {name}
        </p>
      </div>
      <div className="boxes">
        <div className="description">
          <a className="descriptionTag"> Description/History </a>
          <br />
          <a id="description">{description}</a>
          <img
            id="personalImage"
            src={imageSrc}
            alt="alternatetext"
            width="80%"
          />
        </div>
        <div className="ingredients">
          <a className="ingredient"> Ingredients </a>
          <br />
          <ul id="list">
            {ingredientList ? (ingredientList.map(function (name, index) {
              return <li key={index}>{name}</li>;
            })) : (<p></p>)
            }
          </ul>
          <div className="addField">
            <label> Add an ingredient! </label> <br />
            <input
              id="newIngredient"
              placeholder="ex: chocolate chips"
              value={newIngredient}
              onChange={(e) => {
                setNewIngredient(e.target.value);
              }}
            />
            <button onClick={addToList} className="button">
              {" "}Add{" "}
            </button>
          </div>
        </div>
        <div className="recipe">
          <a className="ingredient"> Recipe </a>
          <a id="url" className="ingredient" href={link} target="_blank">
            {courtesyOf}
          </a>
          <br />
          <ol id="instructions">
            {instructions ? (instructions.map(function (name, index) {
              return <li key={index}>{name}</li>;
            })) : (<p>error!</p>)}
          </ol>
          <div className="addField">
            <label> Add an instruction! </label> <br />
            <input
              id="newInstruction"
              placeholder="ex: try it!"
              value={newInstruction}
              onChange={(e) => {
                setNewInstruction(e.target.value);
              }}
            />
            <button onClick={addToListInstruction} className="button">
              {" "}Add{" "}
            </button>
          </div>
        </div>
      </div>
      <button id="JSONbutton" role="button" onClick={recipeToJSON}>
        {" "}
        Convert Recipe into JSON!
      </button>
      <pre id="pre-formatter">
        <code id="json"></code>
      </pre>
    </div>
  );
}
