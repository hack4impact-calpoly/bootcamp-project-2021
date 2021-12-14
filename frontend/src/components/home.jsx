import React from 'react';
import './Home.css';
import recipes from '../recipeData';
import Previews from './previews';
export default function Home(){
    return(
        <body>
        <div>
            <header>
            <h1 className = "h1"> Welcome to Cooking up a Storm!</h1>
            </header>
            <p> Welcome to my cooking website! Here you'll find 3 amazing breakfast recipes anyone can make!</p>
            <h1 className = "h1">Five Star Breakfast</h1>
            {recipes.map(recipe => 
            <Previews
            name={recipe.recipeName}
            desc={recipe.previewDesc}
            image={recipe.recipeImage}
            link={recipe.link}
            />)}
        </div>
        </body>
    );
}