import React, {useState, useEffect} from 'react'
import Home from './home'
import About from './about'
// import recipes from './recipeData'
import RecipePage from './recipePage'
import './App.css'
import Navbar from './navbar.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  let [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      let data = await fetch("http://localhost:3001/api/recipe")
      setRecipes(await data.json())
    }
    getRecipes()
  }, [])

  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {recipes.map(recipe =>
              <Route exact path={recipe.link} element={
                <RecipePage 
                  image={recipe.recipeImage}
                  name={recipe.recipeName} 
                  desc={recipe.recipeDesc}
                  ingredients={recipe.ingredients}
                  steps={recipe.steps}
                />
              }
              />
          )}
          
        </Routes>
      </div>
    </Router>
  )
}

export default App