import React from 'react';
import './RecipePreview.css';

export default function RecipePreview({name, desc, image}) {
  return (
    <div className="recipe grow">
        <img src={image} alt={name}/>
        <h2><a href="recipe1.html">{name}</a></h2>
        <p>{desc}</p>
    </div>
  );
}
