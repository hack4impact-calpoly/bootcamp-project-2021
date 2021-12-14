import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
    <header className = "background">
      <h1 className = "title">Cooking up a Storm</h1>
      <nav className = "navi">
             <h3><Link className = "test"  to="/">Home</Link></h3>
             <h3><Link className = "test" to="/about-me">About Me</Link></h3>
      </nav>
    </header>
  );
}
