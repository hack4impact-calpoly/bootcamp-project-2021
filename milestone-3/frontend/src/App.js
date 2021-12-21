import './App.css';
import Home from './components/home.jsx';
import Recipe_page from './components/recipe_page.jsx'
import About from './components/about.jsx'
import { BrowserRouter, Route , Routes} from  'react-router-dom'
import React, { useState, useEffect } from 'react';



function App() {
  //useState hook to store the array of recipes
  let [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      let res = await fetch('http://localhost:3001/api/recipe')
      setRecipes(await res.json())
    }
    loadRecipes();
  }, [])

  console.log(recipes)
  
  return (
    //app.js only contains routes to the compoonets which have actual html content
    //It felt organic to make app.js like a header file that links all the jsx files
    //idk if this is the best way but it certainly made it easier for me to understand
    <div className="App">
      <header className="App-header">

        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Mac%20and%20Cheese" element={<Recipe_page recipe={recipes[0]}/>} />
            <Route path="/BLT" element={<Recipe_page recipe={recipes[1]}/>} />
            <Route path="/Shrimp%20Scampi" element={<Recipe_page recipe={recipes[2]}/>} />
            <Route path="/about" element={<About />} />
          </Routes>

        </ BrowserRouter>

      </header>
    </div>
  );
}

export default App;
