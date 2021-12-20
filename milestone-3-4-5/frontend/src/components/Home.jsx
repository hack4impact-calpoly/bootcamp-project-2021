import "../styles/Home.module.css";
import RecipePreview from "./RecipePreview";

export default function Home(props) {
  return (
    <div>
      <h2>welcome to my bakery!</h2>
      <p>here are some recipes I like</p>
      <h3>recipes</h3>
      {props.recipes.map(recipe => (
        <RecipePreview
          name={recipe.recipeName}
          desc={recipe.recipeDescription}
          img={recipe.recipeImage}
        />
      ))}
    </div>
  );
}
