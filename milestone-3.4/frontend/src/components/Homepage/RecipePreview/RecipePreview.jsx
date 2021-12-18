import React from 'react';
import './RecipePreview.css';
import { Link } from 'react-router-dom';

export default function RecipePreview({name, desc, link, image}) {
  return (
    <div className="recipe grow">
      <img src={image} alt={name}/>
      <h2><Link to={`${link}`}>{name}</Link></h2>
      <p>{desc}</p>
    </div>
  );
}
