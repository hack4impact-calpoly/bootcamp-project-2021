import React from 'react';
import './aboutMe.css';
import polaroid from '..\\src\\images\\Pizza-Night-Polaroid.jpg'



export default function AboutMe() {
    return (
        <div className="container">
            <div class="about-container">
                <h2 class="about-title">About Brandon</h2>
                <p class="about-text">Hi! My name is Brandon Huynh. Born in Seattle, Washington 
                and raised in the greater Seattle area, I've always enjoyed the outdoors and nature.</p>
                
                <img class="polaroid-image" src={polaroid} alt="Polaroid"/>
                
                <p class="about-text"> This is a picture of me and my friends enjoying some homemade pizza.</p>
            </div>

    
            <h3 class="title-header">Hobbies</h3>

    <div class="ingredient-container">

        <div class="ingredient-list">
            <ul>
                <li>Lacrosse</li>
                <li>Hiking</li>
                <li>Bowling</li>
                <li>Poker</li>
            </ul>
        </div>

    </div>

        </div>
    );
}