import React, {useState, useEffect} from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Home from './components/home.jsx';
import Recipe from './components/recipePage.jsx';

function App() {

  let [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = () => {
      fetch("/api/recipe")
      .then(res => res.json())
      .then(jsondata => setRecipes(jsondata))
    }
    loadRecipes()
  }, []);

  return (  
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route exact path= '/'>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>
          
          {recipes.map((recipe) => {
            return (
              <Route path={`/recipe/${recipe.recipeName}`}> 
                <Recipe
                  name = {recipe.recipeName}
                  image = {recipe.recipeImage}
                  ingredients = {recipe.ingredientList}
                  instructions = {recipe.steps}
                /> { /*calling the component*/}
              </Route>
            )}
          )}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
