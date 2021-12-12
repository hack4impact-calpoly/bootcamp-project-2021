import React from 'react';
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
      <nav>
             <h2><Link to="/">Home</Link></h2>
             <h2><Link to="/about-me">About Me</Link></h2>
      </nav>
  );
}
