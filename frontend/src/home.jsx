import RecipePreview from './recipePreview';
//import recipes from './recipeData';
import './home.css';
import React, {useState, useEffect} from "react"

export default function Home() {


  const [recipes, setRecipes] = React.useState()

  useEffect(() => {
    const loadRecipes = async () => {
      fetch('http://localhost:3001/api/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(error => console.log(error))
      //console.log(res)
    }

    loadRecipes()
    console.log("yo")
    console.log(recipes)

  }, [])

  return (
    <div>
      <br/>
      <h2>Overview of this site</h2>
      <br/>
      <p class="intro">
        There is absolutely no rhyme or reason to any of the recipes that I am about to share.
        Welcome to my website where I will be giving you recipes that have randomly popped into my head throughought the course of the day. Enjoy!
      </p>
      <br/>
      <h1> Recipe List </h1>
        {recipes ? (recipes.map(recipe =>
          <RecipePreview
            name={recipe.recipeName}
            desc={recipe.recipeDescription}
            image={recipe.recipeImage}
            link={recipe.link}

        />)):(
          <p> loading ... </p>
        )}
    </div>




  );
}
