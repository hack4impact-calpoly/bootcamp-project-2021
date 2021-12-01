import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Jin's Egg-cellent Recipes</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
        </nav>
    );
}