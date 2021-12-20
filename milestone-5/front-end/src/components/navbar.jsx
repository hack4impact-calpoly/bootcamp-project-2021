import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <h1 id="title">
        <Link to="/">Recipies From The 'Toon</Link>
      </h1>
      <hr />
      <nav>
        <Link to="/">Home/Recipies</Link>
        <Link to="/about">Meet the chef(s)</Link>
      </nav>
    </header>
  );
}
