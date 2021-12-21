import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
      <h2 id="title">Angela's Kitchen</h2>
      <nav class="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
      </nav>
    </header>
  );
}
