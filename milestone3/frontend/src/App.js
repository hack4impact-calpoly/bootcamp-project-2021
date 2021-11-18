import './App.css';
import Navbar from './components/navbar.jsx';
import AboutMe from './components/aboutMe.jsx';
import Home from './components/home.jsx';
import RecipePage from './components/recipePage.jsx';
import recipes from "./recipeData.js";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar />
        <div className="spacing">         
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutMe">
              <AboutMe />
            </Route>
            <Route path="/recipes/Grilled Cheese Sandwhich">
              <RecipePage name={recipes[0].name} desc={recipes[0].info} image={recipes[0].image} ingredients={recipes[0].ingredients} steps={recipes[0].instructions} />
            </Route>
            <Route path="/recipes/Cheese Omelette">
              <RecipePage name={recipes[1].name} desc={recipes[1].info} image={recipes[1].image} ingredients={recipes[1].ingredients} steps={recipes[1].instructions} />
            </Route>
            <Route path="/recipes/Chicken Burger">
              <RecipePage name={recipes[2].name} desc={recipes[2].info} image={recipes[2].image} ingredients={recipes[2].ingredients} steps={recipes[2].instructions} />
            </Route>
          </Routes>
        </div>     
    </Router>
  );
}

export default App;
