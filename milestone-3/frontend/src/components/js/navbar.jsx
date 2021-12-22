import { Link } from "react-router-dom";

import React from 'react';
import '../css/navbar.css';

export default function Navbar() {
    return (
        // replace everything in between the <header> & <header /> tags
        // with your navbar code from your earlier milestones

        <header className="header-background">
            <h1 className="main-text"><Link to="/">mon appétit</Link></h1>
            <nav className="navbar">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
            </nav>
        </header>

    );
}