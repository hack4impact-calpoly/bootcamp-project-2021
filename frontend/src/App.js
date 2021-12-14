import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Nav from './components/navibar';
import recipes from './recipeData';
import Recipepage from './components/recipepage';
function App() {
  return (
      <div className="App">
        <Router>
        <Nav/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        {recipes.map(recipe => <Route exact path={recipe.link} element={
                <Recipepage 
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
        </Router>
      </div>
  );
}

export default App;
