import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Recipe from './components/recipe'
import NavBar from './components/navigation'
import Home from './components/home';
import RecipeDisplay from './components/recipeDisplay';
import recipes from "./recipeData"

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {recipes.map(recipe =>
              <Route exact path={recipe.link} element={
                <Recipe 
                  name={recipe.name} 
                  desc={recipe.desc}
                  image={recipe.recipeImage}
                  ingredients={recipe.ingredients}
                  steps={recipe.prep}
                  size={recipe.size}
                />
              }
              />
            )};
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
