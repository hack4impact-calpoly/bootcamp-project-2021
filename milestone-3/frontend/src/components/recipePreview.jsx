import React from 'react';
import './recipePreview.css'

export default function RecipePreview({recipeName, recipeDesc, imageSrc}) {
  return (
    <div className="recipePreview">
        <h2 className="recipeHeader">{recipeName}</h2>
        <section className="display">
            <img className="recipeImage" src={imageSrc} alt={recipeName} width="250px" height="150px"/>
            <p className="textDescription">{recipeDesc}</p>
        </section>
    </div>
  );
}