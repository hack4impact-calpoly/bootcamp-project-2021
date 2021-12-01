import React from "react";
import Icon from "../images/undraw_breakfast_psiw.svg";
import "./Intro.css";

const Intro = () => {
  return (
    <section class="intro">
      <h2>Welcome to Angela's Kitchen!</h2>
      <p>
        Here you’ll find healthy dishes that don’t sacrifice any of the flavor.
        People may think eating healthy is boring but that’s furthest from the
        truth. You can still enjoy delicious tasting meals with healthier
        alternatives!
      </p>
      <img id="brek" src={Icon} />
    </section>
  );
};

export default Intro;
