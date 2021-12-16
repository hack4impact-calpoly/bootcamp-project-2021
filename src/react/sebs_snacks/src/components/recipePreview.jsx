import React from "react";
import "../stylesheets/recipePreview.css";
import { Link, Outlet } from "react-router-dom";

//Only need to put default on the first or main component of a file
export default function Recipe({id, name, img, desc, alt}) {
    
    return (
        <div className="dish">
            <Link id="dish" to={`/recipe/${id}`} key={id}>
                <h3>{name}</h3>
            </Link>
            <Link to={`/recipe/${id}`} key={id}>
                <img id="recipeImg" src={img} alt={alt} width={200} height={200}></img>
            </Link>
            <p id="recipeDesc">{desc}</p>
            <Outlet />
        </div>
    )
}

/*  
    <a id="dish" href="carbonara.html"><h3>{name}</h3></a>
    <a href="carbonara.html">
        <img id="recipeImg" src={img} alt={alt} width={200} height={200}></img>
    </a>
*/