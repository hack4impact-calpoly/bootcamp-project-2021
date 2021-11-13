import React from 'react';
import './recipePreview.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function RecipePreview(prop) {
  return (

    //recipe previews which are going to be imported by home.jsx
    <header>  
        <div class="recipe_title">
            <h1 id="name">{prop.recipe.recipeName}</h1>
            <img src={prop.recipe.recipeImage} alt="mac" width="400"/><br/>
            <Link id="click" to={"./" + prop.recipe.recipeName}  state={{ prop, }}>Click Here</Link>
        </div>
	  </header>
  );
}