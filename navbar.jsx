import React from 'react';
import HomePage from './homepage';
import './style.css'

export default function Navbar() {
  return (
// replace everything in between the <header> & <header /> tags
// with your navbar code from your earlier milestones
<header className = "MyHeader">
	<div className = "imageContainer">
	<img src = "https://www.agileventures.org/assets/full_logo2_agile_ventures-06e917d2a31455091f5e4b74b7ca6592d2f8f5b4d5de52bdc9ea9a2505c6581e.png" width = "100px"/>
	</div>
	<div className = "headerContainer">
		<h1>Cole's Curious Cuisines</h1>
	
	</div>
	<nav className = "Nav">
		<a className = 'NavLink' href = "/">Home</a>
		<a className = 'NavLink' href = "/about">About the Chef</a>
	</nav>

</header>
  );
}