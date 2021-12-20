import { useEffect, useState } from "react";
import About from "./components/About";
import RecipePage from "./components/RecipePage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      await fetch("http://localhost:3001/api/recipe")
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error => console.log("Failed to fetch data: ", error));
    };
    loadRecipes();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home recipes={recipes} />} />
        <Route path='about' element={<About />} />
        {recipes.map(recipe => (
          <Route
            path={`recipePage/${recipe.recipeName.split(" ").join("-")}`}
            element={
              <RecipePage
                name={recipe.recipeName}
                desc={recipe.recipeDescription}
                img={recipe.recipeImage}
                ingredients={recipe.ingredientList}
                instructions={recipe.instructionList}
              />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
