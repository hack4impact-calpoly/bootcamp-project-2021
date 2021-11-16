import React from 'react';
import './recipe.css';
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import recipes from '../recipeData';


export default function Recipe(props) {
    return (
        <div>
            <div id="recipe_header">
                <Link to={props.link}>{props.name}</Link>
            </div>
            <div id="recipe_showcase">
                <img src={props.img}></img>
                <p>{props.desc}</p>
            </div>
        </div >
    );
}

