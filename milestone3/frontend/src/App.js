import './App.css';
import Navbar from './components/navbar.jsx';
import AboutMe from './components/aboutMe.jsx';
import Home from './components/home.jsx';
import RecipePage from './components/recipePage.jsx';
// import recipes from "./recipeData.js";
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {

  let [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const loadRecipe = async () => {
      let res = await fetch('http://localhost:3001/api/recipe')
      setRecipes(await res.json())
    }
    loadRecipe([]);
  }, [])

  return (
    <Router>
        <Navbar />
        <div className="spacing">         
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            {recipes.map(recipe =>
              <Route exact path={recipe.link} element={
                <RecipePage 
                  name={recipe.name}
                  desc={recipe.info}
                  image={recipe.image}
                  ingredients={recipe.ingredients}
                  steps={recipe.instructions}
                />
              }/>
            )};
          </Routes>
        </div>     
    </Router>
  );
}

export default App;
