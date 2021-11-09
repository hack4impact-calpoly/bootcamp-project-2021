import React from 'react';
import './RecipePreview.css';
import { Link, Route, useParams} from 'react-router-dom';
import RecipePage from '../../RecipePage/RecipePage';
import recipeData from '../../../recipeData';
import '../../../images/blackberry-lime.jpg';

export default function RecipePreview({name, desc, link, image}) {
  return (
    <div className="recipe grow">
      <img src={image} alt={name}/>
      <h2><Link to={`${link}`}>{name}</Link></h2>
      <p>{desc}</p>
    </div>
  );
}
