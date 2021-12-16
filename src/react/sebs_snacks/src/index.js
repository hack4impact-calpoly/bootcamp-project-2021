import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
  } from 'react-router-dom'

import App from './App';
import AboutmePage from './components/aboutme';
import RecipePage from './components/recipePage';
//import SpaghettiPage from './components/spaghetti';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="aboutme" element={<AboutmePage />} />
      <Route path="recipe" element={<RecipePage />}>
        <Route path=":recipeID" element={<RecipePage />} />
      </Route>
      <Route path="*" element={<App />} /> {/*In case the path does not catch anything */}
    </Routes>
  </BrowserRouter>,
  rootElement
);