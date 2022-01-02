import React from "react";
import './about.css';

export default function About() {
    return (
        <div> 
            <h1>About Me</h1>
            <p class="intro">
                Things I enjoy:
                <ul>
                    <li>Cooking</li>
                    <li>Programming</li>
                    <li>Mountain Biking</li>
                    <li>Swimming</li>
                </ul>
            </p>
        </div>
    );
}