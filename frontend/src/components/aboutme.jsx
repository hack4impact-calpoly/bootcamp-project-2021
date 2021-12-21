import React from "react";
import "./style.css";

export default function AboutMe() {
    return(
        <div>
            <h1 className ="header-text">About the Chef</h1>
            <div className = "about-me-container">
                <img className = "about-me-image" src = "about-me-img.jpg" alt=""/>
                <div className = "flex-item">
                    <h4>Here is me and a couple of friends having a casual conversation underwater</h4>
                </div>
            </div>
            <h2 id="list-head">Things I like to do</h2>
            <ol className = "aboutme-list">
                <li>Cook food</li>
                <li>Eat food</li>
                <li>Go out to restaraunts</li>
                <li>Go skiing and hiking</li>
                <li>Snack</li>
            </ol>
        </div>
    )
}