import React from 'react';
import './about.css'

export default function About() {
    return (
        <div>
            <div>
                <h2>Who am I?</h2>
            </div>
            <p id="info_head">My name is Jin Wu! You can have absolute trust in my recipies because:</p>
            <div id="information">
                <img id="my_pic" src="http://pm1.narvii.com/6452/fe2a228ae89fac9570142d3f46e3b134df0d173f_00.jpg"></img>
                <ul>
                    <li>I have egg-cellent taste!</li>
                    <li>I usually eat like 5 eggs a day! That's a lot!</li>
                    <li>Im a good guy?</li>
                    <li>I can touch my toes!</li>
                </ul>
            </div>
        </div>
    );
}