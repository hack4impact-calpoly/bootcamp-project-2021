import React from 'react';
import './recipe.css';

export default function Recipe(props){
    return(
        <div id="recipe-prev">
            <h3>{props.name}</h3>
            <div class="display">
                <img width="200px" src={props.imgSrc}></img>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}