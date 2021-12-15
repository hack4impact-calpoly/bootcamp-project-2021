import React from "react";
import './about.css';

export default function About()
{
    return (
        <div>
            
            <h2>About Me!</h2>
            <p>I am a sophomore with a mom that makes delicous food!</p>
            <p> Here is a picture of me back home!</p>
            <img class="center" src="/me.jpg" height="250"></img>
            <h2> Qualifications</h2>
            <li> I am a HUGE foodie </li>
            <li> I have watched all seasons of the Great British Baking Show </li>
            <li> I make gourmet breakfast everyday - scrambled eggs is gourmet!</li>
            <li> My friends and I try new food places every weekend, so I know a little about ~taste~ </li> 
        </div>
    );
}