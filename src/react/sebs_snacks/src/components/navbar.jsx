import React from "react";
import '../App.css'
import '../stylesheets/navbar.css'

export default function Navbar() {
    return(
    <header>
        <h1 id="name">Sebastien's Snacks</h1>
        <nav>
          <a id="home_home" href="index.html"><h3>Home</h3></a>
          <a id="about" href="aboutme.html"><h3>About</h3></a>
        </nav>
    </header>
      )
  }