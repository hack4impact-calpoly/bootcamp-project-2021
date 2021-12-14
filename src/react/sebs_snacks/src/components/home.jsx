import React from "react";
import "../stylesheets/home.css"
import Recipe from "./recipePreview";
import recipeInfo from "../recipeInfo";

export default function Home() {
    return (
        <body>
            <p id="welcome"><h2>Welcome to Sebastien's Snacks</h2></p>
            <p id="welcomeMessage"><h4>This is where I share some of my personal favorite snack and dinner recipes. Bon Apetito!</h4></p>
            <br/>
            <div class="recipes">
            <h2 id="snacks">Snacks:</h2>
            {recipeInfo.map(recipe => 
                <Recipe 
                name={recipe.name}
                img={recipe.imgSrc}
                desc={recipe.description}
                alt = {recipe.alt}
                />
            )}
            </div>
        </body>
    )
}