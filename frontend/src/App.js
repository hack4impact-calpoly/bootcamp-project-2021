import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Navbar from './navbar';
import About from './aboutme';
import Home from './home';
import RecipePage from './recipePage';
import recipes from "./recipeData";

function App() {
  return (
    <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<About />} />
            {recipes.map(recipe =>
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
            )};
          </Routes>
        </div>
    </Router>
  );
}

export default App;
