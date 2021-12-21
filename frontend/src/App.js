import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from './components/navbar';
import Home from './components/homepage';
import RecipePage from './components/recipepage';
import AboutMe from './components/aboutme';
import React, { useState, useEffect } from "react";

function App() {

  let [recipes, setRecipes] = useState();
 
  useEffect(() => {
    const loadRecipes = () => {
      fetch("http://localhost:3001/api/recipe")
      .then(res => res.json())
      .then(jsondata => setRecipes(jsondata))
      .catch(error => console.log(error))
    };
    loadRecipes();
  }, [])

  return (
      <Router>
      <Navbar />
      <div id="routes">
        <Routes>
          <Route exact path="/" element={<Home recipes={recipes}/>} />
          <Route path="/about-me" element={<AboutMe />} />
          {recipes ? (recipes.map(recipe =>
          <Route exact path = {recipe.link}
            element={
              <RecipePage
                name={recipe.recipeName}
                imagesrc={recipe.recipeImage}
                ingredients={recipe.ingredients}
                procedure={recipe.procedure}
              />
            }
          />
        )) : (
          <Route path="/" element={<Home recipes={recipes} />} />
        )};
        </Routes>
      </div>
    </Router>
  );
          }

export default App;
