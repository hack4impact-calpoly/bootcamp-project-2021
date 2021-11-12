import "./App.css";
import recipes from "./recipeData.js";
import RecipePage from "./components/RecipePage";
import Navbar from "./components/navbar.jsx";
import AboutMe from "./components/about.jsx";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutMe />
          </Route>
          {recipes.map((recipe) => (
            <Route exact path={"/recipes/" + recipe.dishName}>
              <RecipePage 
                dishName={recipe.dishName}
                recipeDesc={recipe.description}
                image={recipe.photo}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
              />
            </Route>
          ))}
          ;
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
