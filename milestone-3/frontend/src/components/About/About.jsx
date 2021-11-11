import React from 'react';
import './About.css';
import profile from '../../images/profile.png';

export default function About() {
  return (
      <div className="about">
        <img src={profile} alt="profile"/>
        <div>
            <h1>Hey, I'm Adelle!</h1>
            <p>
                I'm a second-year software engineering major who enjoys playing piano, reading, and hiking with friends.
                I get excited over cute stickers, avocados, and cats :D
            </p>
        </div>
      </div>
  );
}
