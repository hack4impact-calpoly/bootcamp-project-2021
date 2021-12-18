import "../styles/Home.module.css";
import RecipePreview from "./RecipePreview";
import recipeData from "../recipeData";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>welcome to my bakery!</h2>
      <p>here are some recipes I like</p>
      <h3>recipes</h3>
      {recipeData.map(recipe => (
        <RecipePreview
          name={recipe.recipeName}
          desc={recipe.recipeDescription}
          img={recipe.recipeImage}
        />
      ))}
      <Outlet />
    </div>
  );
}
