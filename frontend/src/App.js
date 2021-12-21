import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import React, {useState, useEffect} from "react"

import Navbar from './navbar';
import About from './aboutme';
import Home from './home';
import RecipePage from './recipePage';
//import recipes from "./recipeData";

function App() {
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

    <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<About />} />
            { recipes ? (recipes.map(recipe =>
              <Route exact path={recipe.link} element={
               <RecipePage
                  name={recipe.recipeName}
                  desc={recipe.recipeDescription}
                  image={recipe.recipeImage}
                  ingredients={recipe.ingredientList}
                  steps={recipe.steps}
                />
              }
            />
          )):
          <Route path = "/" element={<Home />} />
        }

          </Routes>
        </div>
    </Router>
  );
}
  export default App;
