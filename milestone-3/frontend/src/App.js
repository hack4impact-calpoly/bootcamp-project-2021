import './App.css';
import Navbar from './components/navbar.jsx';
import RecipePreview from './components/recipePreview';
import recipes from './recipeData';

function App() {
  return (
    <div className="App">
      <Navbar />
      {recipes.map(recipe =>
        <RecipePreview 
          recipeName={recipe.name} 
          recipeDesc={recipe.description}
          imageSrc={recipe.imageSrc}
        />
      )};
    </div>
  );
}

export default App;
