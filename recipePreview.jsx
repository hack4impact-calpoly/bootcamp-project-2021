import React from 'react';
import './recipePreview.css'

export default function RecipePre({ name, description, imageSrc }) {
  return (
    <div className="outline">
      <div>
        <p id="recipeName" class="title">{name}</p>
      </div>
      <div class="boxes">
        <div class="description">
          <a class="descriptionTag"> Description/History </a>
          <br></br>
          <a id="description">{description}</a>
          <img id="personalImage" src={imageSrc}
            alt="alternatetext" width="80%"></img>
        </div>
      </div>
    </div>
  );
}