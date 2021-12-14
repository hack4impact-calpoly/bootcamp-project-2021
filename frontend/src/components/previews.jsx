import './recipe.css';
import React from 'react';
import { Link } from "react-router-dom";

export default function Previews({ name, desc, image, link}) {
  return (
    <div>
      <h3>
        <Link className = "preview" to={link}>{name}</Link><br />
      </h3>
      <div>
        <img src={image} alt="breakfast food" />
        <p>{desc}</p>
      </div>
    </div>
  )};