import React from 'react';
import './style.css';
import recipes from './recipeData.json';
import RecipeContent from './recipeContent';
import Navbar from './navbar';

export default function SalmonPage(index) {
   return (
      <div id = "body">
         <Navbar />
            <RecipeContent
               route={recipes.recipes[index.index].Route}
               name={recipes.recipes[index.index].Name}
               desc={recipes.recipes[index.index].Description}
               image={recipes.recipes[index.index].Image}
               intro={recipes.recipes[index.index].Introduction}
               ingredients={recipes.recipes[index.index].Ingredients}
               instructions={recipes.recipes[index.index].Instructions}
            />
      </div>
   );
}