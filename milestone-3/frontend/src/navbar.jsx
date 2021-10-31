import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="main-header">
      <h1>Noah's Nibbles</h1>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About Me</Link>
      </nav>
    </header>
  );
}
