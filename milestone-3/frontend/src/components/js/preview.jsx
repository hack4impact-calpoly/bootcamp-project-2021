import React from 'react';
import { Link } from "react-router-dom";
import '../css/preview.css';

export default function Preview({ name, prev, image, alt, link }) {

    let path = require('../data/images/' + image);

    return (
        <div className="search-container">
            <Link className="item-link" to={link}>
                <img className="search-item" src={path} alt={alt} />
            </Link>
            <p className="search-item-2">
                <strong className="recipe-name">{name}</strong>
                <br />
                {prev}
                <br />
                <br />
                <Link to={link}>SEE RECIPE</Link>
            </p>
        </div>
    )
};