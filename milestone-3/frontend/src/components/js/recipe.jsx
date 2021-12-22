import React from 'react';
import '../css/recipe.css';
//import { Link } from "react-router-dom";


export default function Recipe({ name, desc, image, alt, serving, ingredients, steps, tutorial }) {

    let path = require('../data/images/' + image);

    const [newIngredient, setNewIngredient] = React.useState('');
    const [newInstruction, setNewInstruction] = React.useState('');

    let ingSet = false;
    let insSet = false;

    const addIngredient = () => {
        let br = document.createElement("br");
        let li = document.createElement("li");

        if (!ingSet) {
            let ul = document.createElement("ul");
            ul.setAttribute("id", "newIngredients");

            let section = document.getElementById("ing");

            let b = document.createElement("b");
            b.appendChild(document.createTextNode("New Ingredients"));

            section.appendChild(b);
            section.appendChild(br);
            section.appendChild(ul);

            ingSet = true;
        }
        let ul = document.getElementById("newIngredients");
        li.appendChild(document.createTextNode(newIngredient));
        ul.appendChild(li);
    }
    const addInstruction = () => {
        let br = document.createElement("br");
        let li = document.createElement("li");

        if (!insSet) {
            let ol = document.createElement("ol");
            ol.setAttribute("id", "newInstructions");

            let section = document.getElementById("prep");

            let b = document.createElement("b");
            b.appendChild(document.createTextNode("New Instructions"));

            section.appendChild(b);
            section.appendChild(br);
            section.appendChild(ol);

            insSet = true;
        }
        let ol = document.getElementById("newInstructions");
        li.appendChild(document.createTextNode(newInstruction));
        ol.appendChild(li);
        ol.appendChild(br);
    }


    return (
        <main>
            <pre id="pre-formatter"><code id="json"></code></pre>
            <section>
                <div className="flex-container">
                    <div className="flex-header">
                        <h2 id="recipeName">{name}</h2>
                        <div id="recipeDescription">
                            <p className="display-linebreak">{
                                desc}
                            </p>
                        </div>
                    </div>
                    <div className="flex-img-ctn">
                        <img id="recipeImage" className="flex-image" src={path} alt={alt} />
                    </div>
                </div>
            </section>
            <section>
            </section>
            <article>
                <section id="ing">
                    <h3>Ingredients</h3>
                    <p><mark>{serving}</mark></p>
                    <ul id="ingredientList">
                        {ingredients.map(function (name, index) {
                            return <li key={index}>{name}</li>;
                        })}
                    </ul>
                </section>
                <div className="form-group">
                    <h4> Add an Ingredient</h4>
                    <label htmlFor="newIngredient">Ingredient: </label>
                    <input
                        id="newIngredient"
                        className="form-element"
                        placeholder="Sugar, spice..."
                        value={newIngredient}
                        onChange={(e) => { setNewIngredient(e.target.value); }}
                    />
                    <br /> <br />
                    <button className="form-button" onClick={addIngredient}>Add Ingredient</button>
                </div>
                <section id="prep">
                    <h3>Preparation</h3>
                    <ol id="instructionList">
                        {steps.map(function (name, index) {
                            if (index === steps.length - 1) { return <li key={index}>{name}</li>; }
                            else { return <><li key={index}>{name}</li><br /></>; }
                        })}
                    </ol>
                </section>
                <div className="form-group">
                    <h4> Add an Instruction</h4>
                    <div className="vertical-align">
                        <label htmlFor="newInstruction">Instruction: </label>
                        <textarea
                            id="newInstruction"
                            className="form-element"
                            placeholder="Pour and Serve!"
                            value={newInstruction}
                            rows="3"
                            onChange={(e) => { setNewInstruction(e.target.value); }}
                        ></textarea>
                        <br /> <br />
                    </div>
                    <button className="form-button" onClick={addInstruction}>Add Instruction</button>
                </div>
            </article>
            <br />
            <div className="tutorial">
                <iframe width="560" height="315" src={tutorial}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </main>
    )
}