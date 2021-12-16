import React from 'react';
import './recipePreview.css'
import { Link } from "react-router-dom";
export default function RecipePreview({name, desc, image, link}) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div>
      <h3>
        <Link to={link}>{name}</Link>
      </h3>
      <div class="recipe">
        <img class="desc-img" src={image} alt = " "/>
        <p class="description">{desc}</p>
      </div>
	  </div>
  );
}
