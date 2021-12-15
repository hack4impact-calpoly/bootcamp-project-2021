import "./navbar.css";
import rachelj from "./images/rachelj.jpg";
import React from "react";
import youngRachel from "./images/youngRachel.JPG";

export default function Navbar() {
  return (
    <header>
      <div className="topBar">
        <img src={youngRachel} alt="alternatetext" width="150" className="right" />
        <img src={rachelj} alt="alternatetext" width="400" className="left" />
        <h1 className="header-check">The Rachel J Show</h1>
      </div>
      <script src="recipe.js"></script>
      <div className="topMenu">
        <a className="menuOption" href="main.html">
          {" "}
          Homepage
        </a>
        <a className="menuOption" href="aboutMe.html">
          {" "}
          About the Chef
        </a>
        <a className="menuOption" href="allRecipes.html">
          {" "}
          Browse All Recipes
        </a>
      </div>
    </header>
  );
}
