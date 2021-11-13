import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
  return (
  <header>
    <h1 id="heading">Jonathan's Indonesian Specialties</h1>
    <nav class="topnav">
      <Link to="/">Home</Link>
      <Link to="/nasi-goreng">Nasi Goreng</Link>
      <Link to="/bihun-goreng">Bihun goreng</Link>
      <Link to="/siomay">Siomay</Link>
      <Link to='/about'>About Me</Link>
    </nav>
  </header>
  );
}