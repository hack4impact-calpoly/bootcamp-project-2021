import React, {useState, useEffect} from 'react';
// import recipes from '../recipeData';
import './home.css'
import RecipePreview from './recipePreview';

export default function Home() {

  let [recipes, setRecipes] = useState();

  useEffect(() => {
      const loadRecipes = () => {
          fetch("http://localhost:3001/api/recipe/")
          .then(res => res.json())
          .then(jsondata => setRecipes(jsondata))
          .catch(error => console.log(error))
      }
      loadRecipes()
  }, []); // [] --> our code will only be ran once when our component is initially rendered

  return (
    <main>
      <div>
        <h1 className="recipesTitle"> Recipes </h1>
          {recipes ? (
            recipes.map(recipe => 
            <RecipePreview 
              name={recipe.name}
              desc={recipe.info}
              image={recipe.image}
              link = {recipe.link}
            /> // calling the component
        ))
        : (
            <p>Loading...</p>
        )}
      </div>
    </main>
  );
}