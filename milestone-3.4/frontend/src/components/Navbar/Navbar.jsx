import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1><Link to="/">Adelle's Smoothies</Link></h1>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
