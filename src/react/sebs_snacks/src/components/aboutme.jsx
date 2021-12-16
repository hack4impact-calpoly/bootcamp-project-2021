import React from "react";
import "../stylesheets/aboutme.css";
import Navbar from "./navbar";
import AboutmePic from "../images/AboutMePicture.JPG"
 
export default function Aboutme() {
    return (
        <div>
            <Navbar />
            <body>
                <br/>
                <div className="aboutMeBox">
                    <div className="aboutMeDesc">
                        <h2 id="aboutMe">About Me:</h2>
                        <p><span style={{fontweight: "bolder"}}>Name:</span> Sebastien Callait</p>
                        <p><span style={{fontweight: "bolder"}}>Major:</span> Computer Engineering</p>
                        <p><span style={{fontweight: "bolder"}}>Year:</span> 3rd Year</p>
                        <p><span style={{fontweight: "bolder"}}>Hometown:</span> Pleasanton (Bay Area)</p>
                        <p> Hi my name is Sebastien Callait. I was born in Pleasanton, California: a small town in the Bay Area. 
                            I am a 3rd year computer engineering major at Cal Poly. I initially joined Cal Poly as an electrical
                            engineering student until I realized I liked software a lot more than hardware, so I made the switch.
                            My entire family is French and I speak it fluently and Spanish semi-fluently. I am currently studying
                            abroad in Rome, Italy in the SE program. I love listening to music, hiking, climbing, exploring new
                            places, surfing, and pretty much any water sport you can think of.</p>
                    </div>
                    <img id="aboutMePicture" src={AboutmePic} alt="About Me"/>
                </div>
            </body>
        </div>
    )
}

