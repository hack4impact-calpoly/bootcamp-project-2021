import './App.css';
import recipes from './components/data';
import Title from './components/begin';
import Recipe from './components/Recipes';
import Navbar from './components/navbar';
import React, { useState, useState} from "react";
import { Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  let [recipes, setRecipes] = useState();
  useEffect(() => {
    const loadAllRecipes = async () => {
      fetch('http://localhost:3001/api/recipe')
      .then(res => res.json())
      .then(jsondata => setRecipes(jsondata))
      .catch(err => console.log(err))
    }
  loadAllRecipes();
}, []);

  return(
    <BrowserRouter>
      <div className = "App">
        {recipes ? (
          <div> 
            <Navbar />
            <div className = "pageData"> 
              <Routes>
                <Route path= "/" element = {<Home recipes = {recipes}/>}/>
                <Route path = "/fried-rice" element ={<Recipe
                name = {recipes[0].name}
                description = {recipes[0].description}
                imgsrc = {recipes[0].imgsrc}
                />}/>
                <Route path = "/chicken-katsu" element ={<Recipe
                name = {recipes[1].name}
                description = {recipes[1].description}
                imgsrc = {recipes1[1].imgsrc}
                />}/>
                <Route path = "/teriyaki-chicken" element ={<Recipe
                name = {recipes[2].name}
                description = {recipes[2].description}
                imgsrc = {recipes[2].imgsrc}
                />}/>
              </Routes>
            </div>
          </div>
        ) : (<p>Page Loading...</p>)}
        
      </div>
    </BrowserRouter>
    
    );
}



export default App;
