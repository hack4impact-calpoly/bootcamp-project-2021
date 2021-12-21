import React from "react";
import { Link } from "react-router-dom";
import "./recipe.css";

export default function Recipe({name, desc, imagesrc, link}) {
    console.log(imagesrc)
    return(
        <div>
            <h3>
                <Link to = {link} className="recipe-header">{name}</Link>
            </h3>
            <img className="recipe-img" src={imagesrc} alt="img" />
            <p className="recipe-text">{desc}</p>
        </div>
    );
}