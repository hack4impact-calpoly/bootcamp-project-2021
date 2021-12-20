import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound404 from "./components/notFound404";
import About from "./components/about";
import Home from "./components/home";
import RecipePage from "./components/recipePage";
import { useState, useEffect, useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const [recipes, setRecipes] = useState([]);

  // Load all recipes
  useEffect(() => {
    const getRecipes = async () => {
      let res = await fetch("http://localhost:3001/api/recipe");
      setRecipes(await res.json());
    };
    getRecipes();
  }, []);

  return (
    <Router>
      <Wrapper>
        <div className="App">
          <Navbar />

          <Routes>
            {recipes.map((recipe) => (
              <Route
                path={recipe.recipeRoute}
                element={<RecipePage {...recipe} />}
              />
            ))}
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
