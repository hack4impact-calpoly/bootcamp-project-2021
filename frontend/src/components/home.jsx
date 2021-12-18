import React, { useState, useEffect } from 'react';
import './home.css';
import RecipePrev from './recipePrev.jsx';

export default function Home() {
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        const loadRecipes = async () => {
            fetch('http://localhost:3001/api/recipe')
                .then(res => res.json())
                .then(jsondata => setRecipe(jsondata))
                .catch(error => console.log(error))
        }
        loadRecipes();
    }, [])
    return (
        <div>
            <div>
                <h1>Welcome, Welcome, Welcome, to the page that will change your life!</h1>
            </div>
            <div>
                <h3>This website contains the collective cooking knowledge of humanity and it will lead you to a successful
                    life. These foods will give you an unparalleled
                    advantage in sports, academics and social life. The foods showcased are tasty and nutritious! So you better
                    pay close attention so you can egg-cel in everything that you do, starting with a good diet!
                </h3>
            </div>
            <div>
                <h1>The Recipies</h1>
                {
                    recipe ? (
                        recipe.map(recipe =>
                            <RecipePrev
                                name={recipe.recipeName}
                                info={recipe.recipeInfo}
                                img={recipe.recipeImage}
                                link={recipe.link} />
                        )
                    )
                        : (
                            <p>Could not load Recipes</p>
                        )
                }
            </div>
        </div>
    );
}

