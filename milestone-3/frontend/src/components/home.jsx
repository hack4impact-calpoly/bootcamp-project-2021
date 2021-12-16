import React, { useState, useEffect } from 'react';
import RecipePreview from './recipePreview';

export default function Home() {

  // create useState for recipes
  let [recipes, setRecipes] = useState([]);

  // create useEffect to get recipes 
  useEffect(() => {
    const getRecipes = async () => {
      try {
        let res = await fetch('http://localhost:3001/api/recipe')
        setRecipes(await res.json())
      } catch (error) {
        console.log(error)
      }
    }
    getRecipes();
  }, []);

  return (
    <div>
      {/* // for each recipe, map the recipe name, description and image source to recipe preview component */}
      {recipes ? (recipes.map(recipe =>
        <RecipePreview 
          recipeName={recipe.recipeName} 
          recipeDesc={recipe.description}
          imageSrc={recipe.imageSrc}
        />
      )) : (
        <p> Loading ... </p>
      )};
    </div>
  );
}