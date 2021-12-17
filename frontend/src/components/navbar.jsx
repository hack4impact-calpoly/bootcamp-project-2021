import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
  return (
// replace everything in between the <header> & <header /> tags
// with your navbar code from your earlier milestones
    <header> 
	    <h1> Receitas da Hannah </h1>
      <h2>Join me on a flavor filled adventure!</h2>
	    <nav>
        <div class="boxes">
            <Link to="/" id="home">Home</Link>
            <Link to="/About" id="about">About</Link>
            <Link to="/Recipe/Brigadeiro" id="brigadeiro">Brigadeiro</Link>
            <Link to="/Recipe/Tapioca" id="taioca">Tapioca</Link>
            <Link to="/Recipe/Pudim" id="pudim">Pudim</Link>
        </div>
	    </nav>
	  </header>
  );
}