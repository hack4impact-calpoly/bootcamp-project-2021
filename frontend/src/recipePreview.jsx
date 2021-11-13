import React from 'react';
import './recipePreview.css'

export default function RecipePreview({name, desc, image}) {
  return (
    <div class="item">
        <h4 id="recipe-name">{name}</h4>
        <p> {desc} </p>
        <div class="menu-image"><img src={image} alt="dish image" /></div>
	</div>
  );
}