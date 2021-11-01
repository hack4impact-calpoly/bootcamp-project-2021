import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
// replace everything in between the <header> & <header /> tags
// with your navbar code from your earlier milestones
    <header> 
        <h1 id="title">Noah's Neat Italian Eats</h1>
        <nav>
            <Link to="/" id="home-link">Home</Link>
            <Link to="/aboutme">About Me</Link>
        </nav>
    </header>
  );
}