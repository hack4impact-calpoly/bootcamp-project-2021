import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Recipe from './components/recipe.jsx';
import recipes from './recipeData.js';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <h1 style={{ margin: "10px" }}>Welcome to Sameera's Secrets</h1>
          <p style={{ margin: "40px" }}>
            Get ready for some of the greatest treats of your life!
          </p>
          {recipes.map((recipe) => (
            <Home
              name={recipe.name}
              img={recipe.src}
              description={recipe.description}
            />
          ))}
        </Route>
        {recipes.map((recipe) => (
          <Route path={"/" + recipe.name}>
            <Recipe
              name={recipe.name}
              img={recipe.src}
              description={recipe.description}
              ingredients={recipe.ingredients}
              directions={recipe.directions}
            />
          </Route>
        ))}
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;