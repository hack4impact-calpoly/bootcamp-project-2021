import React from "react";
import {Link} from "react-router-dom";

export default function RecipePreview(props) {
    return (
        <div className="Card">
            <h2><Link to={`/recipes/${props.recipe.name}`}>{props.recipe.name}</Link></h2>
            <div className="CardBody">
                <img className="CardImage" src={props.recipe.image} alt={props.recipe.name} />
                <p className="CardText">{props.recipe.description}</p>
            </div>
        </div>
    );
}