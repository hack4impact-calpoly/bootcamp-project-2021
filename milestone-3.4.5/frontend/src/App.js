import './App.css';
import './styles.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Homepage/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from './components/RecipePage/RecipePage';
import { useState, useEffect } from 'react';

function App() {
  let [recipes, setRecipes] = useState();

  useEffect(() => {
    const loadRecipes = async () => {
      await fetch("http://localhost:3001/api/recipe")
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(error => console.log(error))
    };
    loadRecipes();
  }, [])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/"
          element={<Home recipes={recipes}/>}
        />
        <Route path="/:recipeId"
          element={<RecipePage/>}
        />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
