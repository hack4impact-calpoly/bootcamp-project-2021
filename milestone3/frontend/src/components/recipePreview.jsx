import React from 'react';
import { Link } from "react-router-dom";
import './recipePreview.css'

export default function RecipePreview({ name, desc, image, link}) {
  return (
    <div>
      <h3>
        <Link to={`/recipes/${link}`}>{name}</Link><br />
      </h3>
      <div className="search-container">
        <img className="search-item" src={image} alt="img" />
        <p className="search-item-2">{desc}</p>
      </div>
  </div>
  )};