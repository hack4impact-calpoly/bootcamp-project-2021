import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
      <nav>
          <h1><Link to="/" style={{ textDecoration: 'none' }}>Megan's (Liquid) Meals </Link></h1>
      </nav>
  );
}