import React from 'react';
import './recipePreview.css'
import {
    Link
} from "react-router-dom";

export default function RecipePreview({name, desc, image, page}) {
  return (
    <div class="recipe">
        <div class="recipe-title">
        <Link to={page}><h3>{name}</h3></Link>
        </div>
        <div class="recipe-content">
            <img class="recipe-display-picture" src={image} alt="img"></img>
            <p class="recipe-description"> {desc} </p>
        </div>
    </div>
  );
}