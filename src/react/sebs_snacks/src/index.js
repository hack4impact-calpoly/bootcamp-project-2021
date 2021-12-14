import React from 'react';

import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
  } from 'react-router-dom'

import App from './App';
import AboutmePage from './components/aboutme';
//import SpaghettiPage from './components/spaghetti';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="aboutme" element={<AboutmePage />} />
      {/*<Route path="carbonara" element={<App />} />
        <Route path="spaghetti" element={<App />} />
    <Route path="pestoPasta" element={<App />} />*/}
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);