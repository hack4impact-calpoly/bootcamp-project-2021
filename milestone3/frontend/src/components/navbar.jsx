import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  return (
      <header className="header-background">
          <h1 className="main-text">Ishaan's Kitchen </h1>
          <nav className="nav">
            <Link to="/"> Home</Link>
            <Link to="/aboutMe">About Me</Link>
          </nav>
      </header>
  );
}