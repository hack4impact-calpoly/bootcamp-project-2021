import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Recipe from './components/recipe'
import NavBar from './components/navigation'
import Home from './components/home';

function App() {
  let [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      let res = await fetch('http://localhost:3001/api/recipe')
      setRecipe(await res.json())
    }
    loadRecipes([]);
  }, []);

  return (
    <div>
      <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home recipes = {recipes}/>} />
            {recipes ? (recipes.map(recipe =>
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
            )) :(            
            <Route exact path="/" element={<Home/>} />
            )};
          </Routes>
    </Router>
    </div>
  );
}

export default App;
