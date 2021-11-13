import React from 'react';
import './navbar.css'

export default function Navbar() {
  return (
// replace everything in between the <header> & <header /> tags
// with your navbar code from your earlier milestones
    <header> 
        <ul class="nav_bar">
            <a>Click On These Helpful Links =={'>'}</a>
            <li id="home"><a href="/">Home</a></li>
            <li><a href="/about">About Adam Meza</a></li>
        </ul>
	</header>
  );
}