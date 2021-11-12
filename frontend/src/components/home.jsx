import React from "react";
import './home.css';
import recipes from '../recipeData.json';
import RecipePreview from './recipePreview.jsx';

let recipeList = recipes.map(recipe => {
    return <RecipePreview recipe={recipe} />;
});

export default function Home() {
    return (
        <main>
            <h1>Welcome to Hu's Chews!</h1>
            <p>Welcome to my website! Almost every day, whether it was after school, swim practice, or music lessons, I would 
                come home to my mom cooking a delicious traditional Chinese meal. Here are some of my favorite recipes that she
                cooks for us. Enjoy!</p>
            {recipeList}
        </main>
    );
}