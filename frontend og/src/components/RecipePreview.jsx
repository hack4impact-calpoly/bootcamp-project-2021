import React from "react";
import { Link } from "react-router-dom";
import "./RecipePreview.css";

const RecipePreview = (props) => {
  return (
    <div className="preview">
      <Link to={props.route}>
        <h3>{props.recipeName}</h3>
      </Link>
      <div className="recipe">
        <img src={props.imageSrc} />
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default RecipePreview;
