import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from './components/js/navbar.jsx';
import About from './components/js/about.jsx';
import Home from './components/js/home.jsx';
import Recipe from './components/js/recipe.jsx';
import recipes from './components/data/recipeData.js';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="spacing">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {recipes.map(recipe =>
            <Route exact path={recipe.link} element={
              <div key={recipe.key}>
                <Recipe
                  name={recipe.recipeName}
                  desc={recipe.recipeDescription}
                  image={recipe.recipeImage}
                  alt={recipe.alt}
                  serving={recipe.serving}
                  ingredients={recipe.ingredientList}
                  steps={recipe.steps}
                  tutorial={recipe.tutorial}
                />
              </div>
            }
            />
          )};
        </Routes>
      </div>
    </Router>
  );
}

export default App;
