import Navbar from "./navbar";
import recipes from "./recipeData";
import RecipeHome from "./components/recipeHome";
import RecipePage from "./components/recipePage";
import About from "./components/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <h1 style={{ margin: "10px" }}>Welcome to Noah's Nibbles</h1>
          <p style={{ margin: "40px" }}>
            Are you ready to cook some tasty meals, look no further!
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
            <RecipePage
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
