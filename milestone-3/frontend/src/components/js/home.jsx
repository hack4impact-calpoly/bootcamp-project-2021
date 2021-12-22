import React from 'react';
import Preview from './preview'
import recipes from '../data/recipeData';
import '../css/home.css'

export default function Home() {
    return (
        <main>
            <h1 className="welcome"> Welcome to mon appétit!</h1>
            <p className="intro">
                This website documents three of our favorite recipes and the basis for a full appetizer, meal, desert course!
                We hope you enjoy your time here and be sure to let us know which of these are your favorites to make!
            </p>
            <h1 className="recipe"> Recipes </h1>
            {recipes.map(recipe => (
                <div key={recipe.key}>
                    <Preview
                        name={recipe.recipeName}
                        prev={recipe.previewDescription}
                        image={recipe.recipeImage}
                        alt={recipe.alt}
                        link={recipe.link}
                    />
                    <br />
                    <br />
                </div>
            ))}
        </main>
    );
}