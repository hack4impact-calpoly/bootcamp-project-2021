import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <header>
            <Link to="/" id="titleContainer"><h1 className="Title">Hu's Chews</h1></Link>
            <nav>
                <Link to="/" className="NavItem">Home</Link>
                <Link to="/about" className="NavItem">About Me</Link>
            </nav>
        </header>
    );
}