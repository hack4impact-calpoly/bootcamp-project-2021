import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  return (
    <header class="header-background">
        <h1 class="main-text">Ishaan's Kitchen </h1>
        <nav class="navbar">
          <Link to="/"> Home </Link>
          <Link to="/aboutMe"> About Me </Link>
        </nav>
    </header>
  );
}