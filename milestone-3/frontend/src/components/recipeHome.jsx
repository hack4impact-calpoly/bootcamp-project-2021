import React from "react";
import { Link } from "react-router-dom";
import "./recipe.css";

export default function RecipeHome({ name, img, description }) {
  return (
    <div>
      <h2 className="recipe-heading">
        <Link to={name}>{name}</Link>
      </h2>
      <div className="recipe-cont">
        <img width="200px" height="200px" src={img} alt={name} />
        <p className="recipe-desc">{description}</p>
      </div>
    </div>
  );
}