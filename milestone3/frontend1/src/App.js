import "./App.css";
import AboutMe from "./aboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Main from "./main";
import RecipePage from "./recipePage";
import React, { useState, useEffect } from 'react';

function App() {
  let [allRecipes, setRecipe] = useState();
  useEffect(() => {
    const loadRecipe = async () => {
      let res = await fetch('http://localhost:3001/api/recipe')
      setRecipe(await res.json())
    }
    loadRecipe([]);
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/allRecipes.html" element={<Home allRecipes={allRecipes} />} />
        <Route path="/main.html" element={<Main />} />
        <Route path="/aboutMe.html" element={<AboutMe />} />
        {allRecipes ? (allRecipes.map(recipe =>
          <Route key={recipe.name} path={recipe.name}
            element={
              <RecipePage
                name={recipe.name}
                description={recipe.description}
                imageSrc={recipe.imageSrc}
                ingredientList={recipe.ingredients}
                instructions={recipe.instructions}
                link={recipe.link}
                courtesyOf={recipe.courtesyOf}
              />
            }
          />
        )) : (
          <Route path="/allRecipes.html" element={<Home allRecipes={allRecipes} />} />
        )};
      </Routes>
    </BrowserRouter>
  );
}

export default App;
