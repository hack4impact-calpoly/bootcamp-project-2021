import recipes from '../recipeData';
import Recipe from '../components/recipe';
import Navbar from '../components/navbar';
import './pages.css';

function HomePage() {
  return (
    <div id="page">
      <Navbar/>
      {recipes.map(recipe => 
        <Recipe 
          name={recipe.name} 
          imgSrc={recipe.imgSrc} 
          desc={recipe.desc}/>
      )};

    </div>
  );
}

export default HomePage;