import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
    return (
        <div>
            <nav>
                <br />
                <Link to="/aboutme"><span className="bleh">About Me</span></Link>
                <Link to="/"><span className="bleh">Home</span></Link>
            </nav>
            <p className="title">Michelle's Cookbook</p>
        </div>
    )
}
