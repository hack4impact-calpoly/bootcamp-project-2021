import React from "react";
import { Link } from "react-router-dom";
import "./recipePreview.css";

export default function RecipePreview({ name, desc, image }) {
  return (
    <div>
      <h3 class="foodHeader">
        <Link to={"/recipes/" + name} class="recipeLink">
          {name}
        </Link>
      </h3>
      <div class="row2">
        {/* another side - main combo, the side holds the image and the main holds the short description of the recipe*/}
        <div class="side2">
          <img src={image} alt={name} class="image_size2" />
        </div>
        <div class="main2">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
