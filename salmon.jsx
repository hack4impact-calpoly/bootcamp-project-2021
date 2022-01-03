import React from 'react';
import './style.css';
import recipes from './recipeData.json';
import RecipeContent from './recipeContent';
import Navbar from './navbar';

export default function SalmonPage(props) {
   return (
      <div id = "body">
         <Navbar />
            <RecipeContent
               route={recipes.recipes[props.index].Route}
               name={recipes.recipes[props.index].Name}
               desc={recipes.recipes[props.index].Description}
               image={recipes.recipes[props.index].Image}
               intro={recipes.recipes[props.index].Introduction}
               ingredients={recipes.recipes[props.index].Ingredients}
               instructions={recipes.recipes[props.index].Instructions}
            />
      </div>
   );
}