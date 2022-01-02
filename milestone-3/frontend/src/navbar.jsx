import React from 'react';
import './navbar.css';
import {
  Link 
} from "react-router-dom";

export default function Navbar() {
  return (
    <header class="header-background"> 
	    <h1> Carter's Recipes </h1>
	    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
	    </nav>
	  </header>
  );
}