import React from 'react';
import './recipePrev.css';
import { Link } from 'react-router-dom';

export default function RecipePrev({ name, info, img, link }) {
    return (
        <div>
            <div id="recipe_header">
                <Link to={link}>{name}</Link>
            </div>
            <div id="recipe_showcase">
                <img src={img}></img>
                <p>{info}</p>
            </div>
        </div>
    );
}