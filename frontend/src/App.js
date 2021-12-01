import './App.css';
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Home from './components/home.jsx';
import recipes from './recipeData.js';
import Recipe from './components/recipe.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {recipes.map(recipe =>
          <Route path={recipe.link} element={
            <Recipe
              name={recipe.recipeName}
              desc={recipe.recipeDescription}
              image={recipe.recipeImage}
              ingredients={recipe.ingredientList}
              steps={recipe.steps}
            />
          }
          />
        )};
      </Routes>
    </BrowserRouter>
  );
}

export default App;
