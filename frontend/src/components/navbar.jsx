import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <div class="header">
        <h1 class="MyCookbook">Sam's Italian Recipebook</h1>
        <div class="linkDiv">
          <Link to="/about" class="homelink">
            About Me!
          </Link>
          <Link to="/" class="homeLink">
            Home
          </Link>
        </div>
      </div>
    </header>
  );
}
