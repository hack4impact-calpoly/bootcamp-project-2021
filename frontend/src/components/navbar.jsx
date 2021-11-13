import React from 'react';
import './navbar.css'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
// replace everything in between the <header> & <header /> tags
// with your navbar code from your earlier milestones
    <header className = "top"> 
	    <div className = "top">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/SurnameChen.svg/1200px-SurnameChen.svg.png" id="logo"/>
          <h1 id="header-top">Grandma's Lazy Susan</h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
	</header>
  );
}
