import React from "react";
import './recipe.css'
import { Link } from "react-router-dom";

export default function Recipe(props) {
    return (
        <div className="recipeTitle">
            <Link to={props.link}><span className="bleh">{props.name}</span></Link>
        <div class="background">
            <br/>
          <img class="img" width="400" height="400" src={props.img}/>
        </div>
        <br/>
      </div>
    );
}