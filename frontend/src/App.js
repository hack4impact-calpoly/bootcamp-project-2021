import './App.css';
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Home from './components/home.jsx';
import Recipe from './components/recipe.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function App() {

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

  console.log(recipe)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {recipe ? (
          recipe.map(recipe =>
            <Route path={recipe.link} element={
              <Recipe
                name={recipe.recipeName}
                desc={recipe.recipeDescription}
                image={recipe.recipeImage}
                ingredients={recipe.ingredientList}
                steps={recipe.steps}
              />
            }
            />
          )
        )
          : (
            <Route />
          )
        }

      </Routes>
    </BrowserRouter>
  );
}



export default App;
