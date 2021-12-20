import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import Navbar from './navbar';
import './pages.css';

function HomePage() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    const loadRecipes = () => {
       fetch('http://localhost:3001/api/recipe')
      .then(res => res.json())
      .then(jsondata => setRecipes(jsondata));
    }
    loadRecipes();
  }, [])


  return (
    <div id="page">
      <Navbar/>
      {recipes ? (recipes.map(recipe => 
        <Recipe 
          name={recipe.recipeName} 
          imgSrc={recipe.recipeImage} 
          desc={recipe.previewDesc}/>
      )) : <p>Loading ...</p>}

    </div>
  );
}

export default HomePage;