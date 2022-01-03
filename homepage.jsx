import RecipePreview from './recipePreview';
import React from 'react';
import './style.css';
import Navbar from './navbar'
import recipes from './recipeData.json'

export default function HomePage() {
  return (
// replace everything in between the <header> & <header /> tags
// with your navbar code from your earlier milestones
<div id = "body">
   <Navbar />
   <main>
   <div className = "intro">
      <h1>Welcome to my curious recipes</h1>
      <p>Join me on my adventure as I learn how to cook food!</p>
   </div>

   {recipes.recipes.map((recipe) => 
         <RecipePreview key={recipe.Name}
            route={recipe.Route}
            name={recipe.Name}
            desc={recipe.Description}
            image={recipe.Image}
            intro={recipe.Introduction}
            ingredients={recipe.Ingredients}
            instructions={recipe.Instructions}
         />
   )}

   </main>
</div>
  );
}