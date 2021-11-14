import React from 'react';
import './navbar.css';
import youngRachel from "./images/youngRachel.JPG";
import rachelj from "./images/rachelj.jpg";
import './App.css';
import recipes from './recipeData.js';
import RecipePreview from './recipePreview';


export default function Navbar() {
  return (
    <header>
      <div class="topBar">
        <img src={youngRachel} alt="alternatetext" width="150" class="right" />
        <img src={rachelj} alt="alternatetext" width="400" class="left" />
        <h1 class="header-check">The Rachel J Show</h1>
      </div>
      <script src="recipe.js"></script>
      <div class="topMenu">
        <a class="menuOption" href="main.html"> Homepage</a>
        <a class="menuOption" href="aboutMe.html"> About the Chef</a>
        <a class="menuOption" href="allRecipes.html"> Browse All Recipes</a>
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </div>
    </header>
  );
}