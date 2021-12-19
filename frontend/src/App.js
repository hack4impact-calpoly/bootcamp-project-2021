import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styles/Global";
import { Theme }  from "./components/styles/Theme"

import RecipePage from "./components/RecipePage";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/About.jsx";
import Home from "./components/Home";

function App() {
  let [recipes, setRecipes] = useState();

  useEffect(() => {
    const getRecipes = () => {
      fetch("http://localhost:3001/api/recipe/")
        .then((res) => res.json())
        .then((recipeData) => setRecipes(recipeData))
        .catch((err) => {
          throw new Error(err);
        });
    };
    getRecipes();
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <>
      <GlobalStyles />
      <Router>
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/">
                {recipes ? (
                  <Home recipes={recipes} />
                ) : (
                  <p> Loading Recipes </p>
                )}
              </Route>
              <Route exact path="/about">
                <AboutMe />
              </Route>
              {recipes ? (
                recipes.map((recipe) => (
                  <Route exact path={"/recipes/" + recipe.dishName}>
                    <RecipePage
                      dishName={recipe.dishName}
                      recipeDesc={recipe.description}
                      image={recipe.photo}
                      ingredients={recipe.ingredients}
                      instructions={recipe.instructions}
                    />
                  </Route>
                ))
              ) : (
                <Route exact path={"/noRecipes/"}></Route>
              )}
            </Switch>
          </div>
        </div>
      </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
