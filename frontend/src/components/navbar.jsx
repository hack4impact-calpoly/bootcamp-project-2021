import React from 'react';
import { Link } from "react-router-dom";

import './style.css'

export default function Navbar() {
  return (
    <header className="header-background">
    <h1 className="main-text">Drew's Delicious Dinners</h1>
    <nav className="navbar">
      <Link to="/" className="nav-list"> Home</Link>
      <Link to="/about-me" className="nav-list">About Me </Link>
    </nav>
  </header>
  );
}