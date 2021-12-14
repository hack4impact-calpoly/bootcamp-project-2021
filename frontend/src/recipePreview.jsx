import React from 'react';
import './recipePreview.css'

export default function RecipePreview(props) {
  return (
    <div className="item">
        <h4 id="recipe-name">{props.name}</h4>
        <p> {props.desc} </p>
        <div className="menu-image"><img src={props.image} alt="dish image" /></div>
	</div>
  );
}