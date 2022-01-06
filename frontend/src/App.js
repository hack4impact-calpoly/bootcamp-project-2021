import './App.css';
import Navbar from './components/navbar';
import Home from './components/home.jsx';
import recipeData from './recipeData.js';
import RecipePage from './components/recipePage';
import AboutMe from './components/aboutMe';
import './components/recipe.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App () {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {recipeData.map(recipe =>
            <Route exact path={recipe.link} element={
              <RecipePage
              name={recipe.recipeTitle}
              img={recipe.image}
              desc={recipe.description}
              ingredients={recipe.ingredientList}
              steps={recipe.stepsList}
              />
            }
            />
          )}
          <Route exact path="/about-me" element={<AboutMe/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;