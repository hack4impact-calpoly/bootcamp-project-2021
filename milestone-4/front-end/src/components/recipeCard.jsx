import React from 'react';
import { Link } from 'react-router-dom';
import './recipeCard.css';

export default function RecipeCard(props) {
   return (
      <div className="recipeSample">
         <h2>{ props.name } recipe</h2>
         <h3>{ props.subtitle }</h3>
         <p>{ props.description }</p>
         <Link to={ props.link }>Learn how to make the { props.name } &#10140;</Link>
      </div>
   )
}