import React from "react";

export default function RecipePage({
  name,
  img,
  description,
  ingredients,
  directions,
}) {
  function addIngredient() {
    const ul = document.getElementById("ingredientList");
    const ingredient = document.getElementById("ingredientInput").value;
    console.log(ingredient);
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
  }

  function addDirection() {
    const ol = document.getElementById("directionsList");
    const directions = document.getElementById("directionsInput").value;
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(directions));
    ol.appendChild(li);
  }

  return (
    <div>
      <h2 id="recipeName">{name}</h2>
      <p id="recipeDescription">{description}</p>
      <img class="indiv-img" src={img} id="recipeImage" />
      <h4 class="sub-heading">Ingredients</h4>
    </div>
  );
}
