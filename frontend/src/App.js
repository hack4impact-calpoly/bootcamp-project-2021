import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Nav from './components/navibar';
import recipes from './recipeData';
import Recipepage from './components/recipepage';
function App() {
  const[recipe,setRecipe] = useState();
  useEffect(()=> {
    const loadRecipes = async () => {
    fetch('http://localhost:3001/api/recipe')
    .then(res => res.json())
    .then(jsondata => setRecipe(jsondata))
    .catch((error) => console.error(`useEffect failed due to ${error}`))
  }
  loadRecipes(); },[]);
  return (
      <div className="App">
        <Router>
        <Nav/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        {recipes ?(recipes.map(recipe => 
        <Route key = {recipe.recipeName} path = {recipe.link}
        element = {
                <Recipepage 
                  name={recipe.recipeName} 
                  desc={recipe.previewDesc}
                  image={recipe.recipeImage}
                  ingredients={recipe.ingredientList}
                  instructions ={recipe.steps}
                />}/>
        )) :(<Route path="/" element={<Home />} />)}
        </Routes>
        </Router>
      </div>
  );
}

export default App;
