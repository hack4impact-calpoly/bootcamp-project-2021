import './Home.css';
import RecipePreview from '../RecipePreview/RecipePreview';

export default function Home({recipes}) {
  return (
    <div>
      <header>
        <h1>Welcome to my recipe page!</h1>
        <p>Explore my site to find refreshing smoothie recipes perfect for any occasion 🍹</p>
      </header>
      <div className="recipes">
        {recipes ? 
          (recipes.map(recipe => 
            <RecipePreview key={recipe.recipeName}
              name={recipe.recipeName}
              desc={recipe.recipeDescription}
              link={recipe.recipeLink}
              image={recipe.recipeImage}
            />
          )) : (
            <p> Loading ...</p>
          )
        }
      </div>
    </div>
  );
}
