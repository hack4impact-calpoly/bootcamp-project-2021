import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import RecipePage from "./components/RecipePage";
import Navbar from "./components/navbar.jsx";
import AboutMe from "./components/about.jsx";
import Home from "./components/home";


function App() {
  let [recipes, setRecipes] = useState();

  useEffect(() => {
    const getRecipes = () => {
      fetch("http://localhost:3001/api/recipe/")
        .then((res) => res.json())
        .then((recipeData) => setRecipes(recipeData))
        .catch(err => {
          throw new Error(err)
        })
    };
    getRecipes();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              {recipes ? (
                <Home recipes={recipes}/>
              ) :
              (
                <p> Loading Recipes </p>
              )}
            </Route>
            <Route exact path="/about">
              <AboutMe />
            </Route>
            {recipes ? (
              (recipes.map(recipe => (
                <Route exact path={"/recipes/" + recipe.dishName}>
                  <RecipePage
                    dishName={recipe.dishName}
                    recipeDesc={recipe.description}
                    image={recipe.photo}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                  />
                </Route>
              )))
            ) :
            (
              <Route exact path={"/noRecipes/"}></Route>
            )}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
