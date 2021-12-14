import React from "react";
import "../stylesheets/recipePreview.css"

//Only need to put default on the first or main component of a file
export default function Recipe({name, img, desc, alt}) {
    return (
        <div className="dish">
            <a id="dish" href="carbonara.html"><h3>{name}</h3></a>
            <a href="carbonara.html">
                <img id="recipeImg" src={img} alt={alt} width={200} height={200}></img>
            </a>
            <p id="recipeDesc">{desc}</p>
        </div>
    )
}
