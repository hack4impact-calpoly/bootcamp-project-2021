import React from 'react';
import '../css/about.css';

export default function About() {
    return (
        <main>
            <h1>About the Chef</h1>
            <p> Khoa Ly (center) and all his friends! </p>
            <div class="picture">
                <img className="pic-of-me" src={require("../data/images/pic-of-me.png")} height="250" alt="Pic of me" />
            </div>
            <section>
                <h3>My Qualifications</h3>
                <ul>
                    <li> I love cooking and sharing new recipes </li>
                    <li> Software engineers are known for their healthy habits </li>
                    <li> People have called my cooking "edible" </li>
                    <li> The glasses gives me credibility </li>
                    <li> I watch many cooking YouTubers </li>
                    <li> I can read </li>
                </ul>
            </section>
        </main>
    );
}
