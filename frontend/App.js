import './App.css';
import AboutMe from './aboutMe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Main from './main';
import React from 'react';
import RecipePage from './recipePage';
import recipes from './recipeData.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/allRecipes.html" element={<Home />} />
        <Route path="/main.html" element={<Main />} />
        <Route path="/aboutMe.html" element={<AboutMe />} />
        <Route exact path="/PESTO%20BREAD!" element={
          <RecipePage
            name={recipes[0].name}
            description={recipes[0].description}
            imageSrc={recipes[0].imageSrc}
            ingredientList={recipes[0].ingredientList}
            instructionList={recipes[0].instructionList}
            link={recipes[0].link}
            courtesyOf={recipes[0].courtesyOf}
          />
        } />
        <Route exact path="/CHALLAH!" element={
          <RecipePage
            name={recipes[1].name}
            description={recipes[1].description}
            imageSrc={recipes[1].imageSrc}
            ingredientList={recipes[1].ingredientList}
            instructionList={recipes[1].instructionList}
            link={recipes[1].link}
            courtesyOf={recipes[1].courtesyOf}
          />
        } />
        <Route exact path="/BAGELS!" element={
          <RecipePage
            name={recipes[2].name}
            description={recipes[2].description}
            imageSrc={recipes[2].imageSrc}
            ingredientList={recipes[2].ingredientList}
            instructionList={recipes[2].instructionList}
            link={recipes[2].link}
            courtesyOf={recipes[2].courtesyOf}
          />
        } />
        <Route exact path="/FOCACCIA!" element={
          <RecipePage
            name={recipes[3].name}
            description={recipes[3].description}
            imageSrc={recipes[3].imageSrc}
            ingredientList={recipes[3].ingredientList}
            instructionList={recipes[3].instructionList}
            link={recipes[3].link}
            courtesyOf={recipes[3].courtesyOf}
          />
        } />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
