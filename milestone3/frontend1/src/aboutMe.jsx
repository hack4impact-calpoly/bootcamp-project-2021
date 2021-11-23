import React from 'react';
import Navbar from './navBar';
import './navbar.css';
import jump1 from "./images/jump1.jpg";
import jump2 from "./images/jump2.jpeg";
import jump3 from "./images/jump3.jpeg";
import jump4 from "./images/jump4.jpeg";
import jump5 from "./images/jump5.jpeg";
import jump6 from "./images/jump6.jpeg";
import me from "./images/me.JPG";
import './App.css';

export default function AboutMe() {
    return (
        <div>
            <Navbar />
            <div>
                <img src={me} alt="alternatetext" height="400" style={{ float: "left" }} />
                <p class="orderedList">
                    Hello! My name is Rachel and I am 3rd year Computer Science major at Cal Poly.
                    Outside of school I love to go hiking, watch The Office and bake. Here are some fun facts about me:
                </p>
                <div class="orderedList">
                    <ol>
                        <li>I am the youngest of three sisters</li>
                        <li>I am from the Bay Area (from Foster City!)</li>
                        <li>My favorite color is purple</li>
                        <li>I am currently learning ASL</li>
                        <li>I get addicted to mini m&amp;ms when ever I see them</li>
                        <li>Halloween is my favorite holiday</li>
                        <li>I get scared way too easily</li>
                        <li>I love to take jumping pictures :)</li>
                    </ol>
                </div>
                <div>
                <img src={jump1} alt="alternatetext" width="165" style={{float: "left"}} />
                <img src={jump2} alt="alternatetext" width="165" style={{float: "left"}} />
                <img src={jump3} alt="alternatetext" width="165" style={{float: "left"}} />
                <img src={jump4} alt="alternatetext" width="165" style={{float: "left"}} />
                <img src={jump5} alt="alternatetext" width="165" style={{float: "left"}} />
                <img src={jump6} alt="alternatetext" width="165" style={{float: "left"}} />
                </div>
            </div>
        </div>
    );
}
