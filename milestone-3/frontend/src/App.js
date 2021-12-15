import logo from './logo.svg';
import './App.css';
//import React, {Fragment} from 'react';
import Navbar from './navbar';
import RecipeHome from './components/recipeHome';
import About from './components/about';
import RecipePage from './components/recipePage';
import recipes from './recipeData';
//import {BrowserRouter, Switch, Route} from'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    {/* <BrowserRouter> */}
    <Navbar />
    <Switch>
      <Route exact path="/">
        {/* <Route exact path="/" element={<RecipeHome/>}> */}
          <h1 style={{ margin: "30px" }}>Welcome to Sameera's Secrets</h1>
          <p style={{ margin: "30px" }}>
            Get ready for some of the greatest treats of your life!
          </p>
          {recipes.map((recipe) => (
            <RecipeHome
              name={recipe.name}
              img={recipe.src}
              description={recipe.description}
            />
          ))}
        </Route>
        {recipes.map((recipe) => (
          <Route path={"/" + recipe.name}>
          {/* <Route path="/" element={<recipe.name/>}> */}
            <RecipePage
              name={recipe.name}
              img={recipe.src}
              description={recipe.description}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          </Route>
        ))}
        <Route path="/about">
          <About />
        </Route>
      {/* </Routes> */}
    </Switch>
    {/* </BrowserRouter> */}
    </Router>
  );
}

export default App;