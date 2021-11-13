import React from 'react';
import './recipePreview.css'
import { Link } from 'react-router-dom'

export default function RecipePreview({name, image}) {
    return (
        // replace everything between the <div> & </div> tags
        // with your code from earlier milestones
        <div>
                <div className="grid-item">
                    <b><Link to={`/recipe/${name}`}>{name}</Link></b>
                    <br/>
                    <img src={image} className="myimg" />
                </div>
        </div>
  );
}
