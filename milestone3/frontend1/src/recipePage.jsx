import "./recipePage.css";
import React from "react";
import Navbar from "./navBar";

export default function RecipePage({
  name,
  description,
  imageSrc,
  ingredientList,
  instructionList,
  link,
  courtesyOf,
}) {
  const [newIngredient, setNewIngredient] = React.useState("");
  const [newInstruction, setNewInstruction] = React.useState("");

  const addToList = () => {
    console.log("made iT");
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
  };

  const addToListInstruction = () => {
    console.log("made iT");
    var ul = document.getElementById("instructionList");
    var li = document.createElement("li");
    var instruction = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(instruction));
    ul.appendChild(li);
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

    var instructionList = [];
    var liTags = document
      .getElementById("instructionList")
      .getElementsByTagName("li");
    for (var key of Object.keys(liTags)) {
      instructionList.push(liTags[key].innerHTML);
    }
    recipeInfo.instructions = instructionList;

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
        <p id="recipeName" class="title">
          {name}
        </p>
      </div>
      <div class="boxes">
        <div class="description">
          <a class="descriptionTag"> Description/History </a>
          <br />
          <a id="description">{description}</a>
          <img
            id="personalImage"
            src={imageSrc}
            alt="alternatetext"
            width="80%"
          />
        </div>
        <div class="ingredients">
          <a class="ingredient"> Ingredients </a>
          <br />
          <ul id="list">
            {ingredientList.map(function (name, index) {
              return <li key={index}>{name}</li>;
            })}
          </ul>
          <div class="addField">
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
              {" "}
              Add{" "}
            </button>
          </div>
        </div>
        <div class="recipe">
          <a class="ingredient"> Recipe </a>
          <a id="url" class="ingredient" href={link} target="_blank">
            {courtesyOf}
          </a>
          <br />
          <ol id="instructionList">
            {instructionList.map(function (name, index) {
              return <li key={index}>{name}</li>;
            })}
          </ol>
          <div class="addField">
            <label> Add an instruction! </label> <br />
            <input
              id="newInstruction"
              placeholder="ex: try it!"
              value={newInstruction}
              onChange={(e) => {
                setNewInstruction(e.target.value);
              }}
            />
            <button onClick={addToListInstruction} class="button">
              {" "}
              Add{" "}
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
