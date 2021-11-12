import React from "react";
import './App.css'

//Only need to put default on the first or main component of a file
export default function Recipe({name, img, desc}) {
    return (
        <div className="outline">
            <h3>{name}</h3>
            <div className="display">
                <img width="200px" src={img} alt="Random Pic"></img>
                <p>{desc}</p>
            </div>
        </div>
    );
}
