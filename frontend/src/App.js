import './App.css';
import Navbar from './navbar';
import Home from './home';
import RecipePage from './recipePage';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import About from './about';

function App() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    const loadRecipes = async () => {
      fetch('http://localhost:3001/api/recipe')
      .then(res => res.json())
      .then(jsondata => setRecipes(jsondata))
      .catch(err => console.log(err))
    }
    loadRecipes();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {recipes ? (
          <div>
            <Navbar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home recipes={recipes}/>} />
                <Route path="/nasi-goreng" element={<RecipePage 
                  name={recipes[0].name} 
                  desc={recipes[0].description} 
                  image={recipes[0].image} 
                  ingredients={recipes[0].ingredients} 
                  instructions={recipes[0].instructions} />}/>
                <Route path="/bihun-goreng" element={<RecipePage 
                  name={recipes[1].name} 
                  desc={recipes[1].description} 
                  image={recipes[1].image} 
                  ingredients={recipes[1].ingredients} 
                  instructions={recipes[1].instructions} />}/>
                <Route path="/siomay" element={<RecipePage 
                  name={recipes[2].name} 
                  desc={recipes[2].description} 
                  image={recipes[2].image} 
                  ingredients={recipes[2].ingredients} 
                  instructions={recipes[2].instructions} />}/>
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
