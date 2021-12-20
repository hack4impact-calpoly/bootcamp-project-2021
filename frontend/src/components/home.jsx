import React, { useState, useEffect } from 'react';
import './home.css'
import RecipeDisplay from './recipeDisplay'

export default function Home (props) {
    return (
        <div>
        <main>
        <body>
            <p className="intro"> 
                POV: you just got double jaw surgery and you're on a liquid diet for 6 weeks. Here are some meals you'll be living off of for the coming weeks :D
             </p> 
            <h1 class = "bars">Recipes</h1>
            <div class = "boxes">
                {props.recipes.map(recipe => 
                <RecipeDisplay key = {recipe.name}
                name={recipe.name}
                link = {recipe.link}
                image={recipe.recipeImage}
                />
            )}
            </div>
            <h1 class = "bars">About Me</h1>
            <p class="intro"> 
                Hi! My name is Megan and I'm a third year software engineering major with a math minor! 
            <br></br>
                Here are some of my interests: 
            </p> 
            <ul class = "intro">
                <li>playing basketball</li>
                <li>traveling and making <a href="https://www.youtube.com/channel/UCqbT9gSlqmPc27BJ9uWe6bw">videos</a></li>
                <li>watching sunsets and sunrises</li>
                <li>playing video games with friends</li>
            </ul>
        </body>
        </main>
        </div>
    );
}