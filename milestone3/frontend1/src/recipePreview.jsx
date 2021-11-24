import "./recipePreview.css";
import { Link } from "react-router-dom";
import React from "react";

export default function RecipePre({ name, description, imageSrc }) {
  return (
    <div className="outline">
      <div>
        <Link id="recipeName" class="title1" to={"/" + name}>
          {name}
        </Link>
      </div>
      <div class="boxes">
        <div class="description1">
          <a class="descriptionTag"> Description/History </a>
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
