import React from "react";
import "./About.css";
import me from "../images/me.jpg";
import friends from "../images/food-1.jpg";
import moreFriends from "../images/food-2.JPG";

import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <section class="about-intro">
        <h2>About The Chef.</h2>
        <p>
          I enjoy eating food and also cooking meals with my friends! I love
          learning about the culture behind different foods and trying out
          different dishes that are out of my comfort zone. I hope to create
          dishes that are delicious but also good for our bodies! Thanks for
          joining me on my food journey :)
        </p>
        <img src={me} />
      </section>
      <section class="friends">
        <h2>Food Made With Friends.</h2>
        <ul>
          <li>Tteokbokki (Spicy Korean Rice Cakes)</li>
          <li>Lemon Garlic Salmon</li>
          <li>Brownies and Ice Cream</li>
          <li>Chicken Fried Rice</li>
          <li>Banana Bread</li>
        </ul>
        <img src={friends} />
        <img src={moreFriends} />
      </section>
    </div>
  );
};

export default About;
