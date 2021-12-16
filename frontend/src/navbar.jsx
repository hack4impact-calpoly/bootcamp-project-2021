import React from 'react';
import './navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
// replace everything in between the <header> & <header /> tags
// with your navbar code from your earlier milestones
    <header class="main_header">
      <h1>Ritvik's Random Recipes</h1>
       <nav>
        <Link to="/"> Home</Link>
        <Link to="/aboutme">About Me </Link>
       </nav>
	  </header>
  );
}
