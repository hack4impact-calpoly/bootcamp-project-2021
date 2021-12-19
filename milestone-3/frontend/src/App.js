import { useState, useEffect } from "react";

import Navbar from "./navbar";
import RecipePreview from "./components/recipePreview";
import RecipePage from "./components/recipePage";
import About from "./components/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const allRecipes = async () => {
      fetch("http://localhost:3001/api/recipe")
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    };
    allRecipes();
    setUpdate(false)
  }, [update]);

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
            <RecipePreview
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
              updateRecipe={() => setUpdate(true)}
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
