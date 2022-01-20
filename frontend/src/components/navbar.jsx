import {Link} from 'react-router-dom';

import './navbar.css'

export default function Navbar() {
    return (
       <div>
      <header className="bar-background">

        <h1>Brandon's Breakfast Bonanaza!</h1>

        <div className="nav-container">
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about-me">About Me!</Link>
        </nav>
        </div>
    </header>
    </div> 
    );
  }