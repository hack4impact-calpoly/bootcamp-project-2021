import React from "react";
import { Link } from "react-router-dom";
import './recipeDisplay.css'

export default function RecipeDisplay({name, image, link}) {
    return (
        <div>
            <div className="boxes">
            <h3 classname ="title"><Link to={`${link}`}>{name}</Link></h3>
                <div class= "meal">
                <img class = "search-pic" src={image} alt={name}/>
                </div>
            </div>
        </div>
    );
}
