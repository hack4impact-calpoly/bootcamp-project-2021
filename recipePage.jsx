import React from 'react';
import Navbar from './navBar';
import './recipePage.css'
import recipes from './recipeData.js';


export default function RecipePage({ name, description, imageSrc, ingredientList, instructionList, link , courtesyOf}) {
    return (
        <div>
            <Navbar />
            <div>
                <p id="recipeName" class="title">{name}</p>
            </div>
            <div class="boxes">
                <div class="description">
                    <a class="descriptionTag"> Description/History </a>
                    <br />
                    <a id="description">{description}</a>
                    <img id="personalImage"
                        src={imageSrc}
                        alt="alternatetext" width="80%" />
                </div>
                <div class="ingredients">
                    <a class="ingredient"> Ingredients </a>
                    <br />
                    <ul id="list">
                        {ingredientList.map(function (name, index) {
                            return <li key={index}>{name}</li>;
                        })}
                    </ul>
                    <div class="addField">
                        <label> Add an ingredient! </label> <br />
                        <input id="newIngredient" placeholder="ex: chocolate chips" value="" />
                        <button onclick="addToList()" class="button"> Add </button>
                    </div>
                </div>
                <div class="recipe">
                    <a class="ingredient"> Recipe </a>
                    <a id="url" class="ingredient"
                        href={link} target="_blank">
                        {courtesyOf}</a>
                    <br />
                    <ol id="instructionList">
                        {instructionList.map(function (name, index) {
                            return <li key={index}>{name}</li>;
                        })}
                    </ol>
                    <div class="addField">
                        <label> Add an instruction! </label> <br />
                        <input id="newInstruction" placeholder="ex: try it!" value="" />
                        <button onclick="addToListInstruction()" class="button"> Add </button>
                    </div>
                </div>
            </div>
            <button id="JSONbutton" role="button" onClick="recipeToJSON()"> Convert Recipe into JSON!</button>
            <pre id="pre-formatter"><code id="json"></code></pre>
        </div>
    );
}