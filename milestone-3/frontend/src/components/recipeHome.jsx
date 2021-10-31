import React from "react";
import { Link } from "react-router-dom";
import "./recipe.css";

export default function RecipeHome({ name, img, description }) {
  return (
    <div>
      <h3 className="heading">
        <Link to={name}>{name}</Link>
      </h3>
      <div className="preview">
        <img width="200px" height="200px" src={img} alt={name} />
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
