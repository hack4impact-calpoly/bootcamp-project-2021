import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import RecipePreview from "./components/RecipePreview";
import recipes from "./Data";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <RecipePreview
            recipeName={recipe.recipeName}
            imageSrc={recipe.imageSrc}
            description={recipe.description}
            route={recipe.route}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
