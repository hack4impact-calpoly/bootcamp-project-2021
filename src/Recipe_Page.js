import React from 'react';
import './recipe_page.css'

export default function Recipe_Page(props) {
    return (
        <div>
            {recipes.map(recipe =>
                <Recipe_Page
                    name={recipe.recipeName}
                    img={recipe.recipeImage}
                    desc={recipe.recipeDescription}
                    steps={recipe.steps}
                    ingredients={recipe.ingredientList}
                />
            )}
            <div>
                <img src="{props.img}"></img>
                <p></p>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div >
    );
}