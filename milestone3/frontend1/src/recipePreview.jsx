import "./recipePreview.css";
import { Link } from "react-router-dom";
import React from "react";

export default function RecipePre({ name, description, imageSrc }) {
  return (
    <div className="outline">
      <div>
        <Link id="recipeName" className="title1" to={"/" + name}>
          {name}
        </Link>
      </div>
      <div className="boxes">
        <div className="description1">
          <a className="descriptionTag"> Description/History </a>
          <br></br>
          <a id="description">{description}</a>
          <img
            id="personalImage"
            src={imageSrc}
            alt="alternatetext"
            width="80%"
          ></img>
        </div>
      </div>
    </div>
  );
}
