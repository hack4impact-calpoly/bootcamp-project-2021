import React from "react";
import '../App.css';
import '../stylesheets/navbar.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Navbar() {
    return(
    <header>
        <h1 id="name">Sebastien's Snacks</h1>
        <nav>
          <Link to={"/"} id="home"><h3>Home</h3></Link>
          <Link to={"aboutme"} id="about"><h3>About Me</h3></Link>
        </nav>
    </header>
      )
  }