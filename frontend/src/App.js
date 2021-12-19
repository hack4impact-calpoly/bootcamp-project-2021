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
        <Route path="/Pancakes" element={
                <Recipepage 
                  name={recipe[0].recipeName} 
                  desc={recipe[0].previewDesc}
                  image={recipe[0].recipeImage}
                  ingredients={recipe[0].ingredientList}
                  steps={recipe[0].instructionList}
                />}/>
         <Route path="/french" element={
                <Recipepage 
                  name={recipe[1].recipeName} 
                  desc={recipe[1].previewDesc}
                  image={recipe[1].recipeImage}
                  ingredients={recipe[1].ingredientList}
                  steps={recipe[1].instructionList}
                />}/>
           <Route path="/baconandegs" element={
                <Recipepage 
                  name={recipe[2].recipeName} 
                  desc={recipe[2].previewDesc}
                  image={recipe[2].recipeImage}
                  ingredients={recipe[2].ingredientList}
                  steps={recipe[2].instructionList}
                />}/>
        </Routes>
        </Router>
      </div>
  );
}

export default App;
