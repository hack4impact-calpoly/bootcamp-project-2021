import React from 'react';
import recipes from '../recipeData';
import RecipeCard from './recipeCard';
import './home.css';

export default function Home() {
    return (
        <main>
            <div id="catchphrase"> 
                <h1>Did watching Avatar make you hungry? Drooling for a Krabby Patty?</h1>
                <p>Luckily for you, you can make your favorite cartoon recipies from the comfort of your own home. Browse our curated list of recipes now!</p>
            </div>
            <section id="recipeCards">
                { recipes.map(recipe =>
                    <RecipeCard
                        name={ recipe.recipeName }
                        subtitle={ recipe.recipeSubtitle }
                        description={ recipe.recipeDescription }
                        link={ recipe.recipeRoute }
                    />
                )}
            </section>
        </main>
    );
}
