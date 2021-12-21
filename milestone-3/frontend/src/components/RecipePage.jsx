import React, { useState } from "react";
import "./RecipePage.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const RecipePage = (props) => {
  const [newIngredient, setNewIngredient] = useState("");
  const [newInstruction, setNewInstruction] = useState("");

  return (
    <div>
      <head>
        <title>Angela's Kitchen</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="recipe.css" />
      </head>
      <body>
        <Navbar />
        <div class="intro-container">
          <div class="intro-header">
            <h1 id="recipeName">{props.recipeName}</h1>
            <p id="text">{props.description}</p>
          </div>
          <img id="image" src={props.imageSrc} />
        </div>
        <section id="ingredients">
          <h2 class="heading">Ingredients You'll Need</h2>
          <ul id="ingredient-list">
            {props.ingredientList.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section class="form">
          <h2>Make It Your Own!</h2>
          <label>Ingredient: </label>
          <input
            id="newIngredient"
            className="form-element"
            placeholder="Ex: 2 cups spinach"
            value={newIngredient}
            onChange={(e) => {
              setNewIngredient(e.target.value);
            }}
            type="text"
          />
          <br />
          <br />
          <button onclick="addIngredient()">Add Ingredient</button>
        </section>
        <section id="steps">
          <h2 class="heading">How To Make</h2>
          <ol id="steps-list">
            <li>
              First, preheat the oven: Preheat the oven to 400°F and grease a
              baking dish that can fit all pieces of salmon with some oil.
            </li>
            <li>
              Next, make the marinade: Whisk lemon juice, garlic, oil, salt, and
              pepper into a bowl.
            </li>
            <li>
              Marinade the salmon: Place the salmon fillets into a Ziploc bag
              and pour over the lemon marinade. Seal the bag and move the pieces
              of salmon to get them evenly coated with the marinade. Let
              marinate for at least 30 minutes.
            </li>
            <li>
              Then, prepare the salmon: Now layer the lemon slices into your
              prepared dish and arrange the salmon on top.
            </li>
            <li>
              Bake the salmon: Bake the salmon for about 12-15 minutes until
              cooked through. Depending on the thickness of your salmon.
            </li>
            <li>
              Once done, lay a few slices of lemon on top of your cooked salmon
              and switch the oven to the broil setting. Broil for 3 minutes
              until the top is nicely golden and crisp.
            </li>
            <li>
              Finally, remove from the oven, garnish with parsley and serve.
            </li>
          </ol>
        </section>
        <section class="form">
          <h2>Make It Your Own!</h2>
          <label>Instruction: </label>
          <input
            id="newStep"
            className="form-element"
            placeholder="Ex: Preheat Oven"
            value={newInstruction}
            onChange={(e) => {
              setNewInstruction(e.target.value);
            }}
            type="text"
          />
          <br />
          <br />
          <button onclick="addStep()">Add Instruction</button>
        </section>
      </body>
      <script type="text/javascript" src="recipe.js"></script>
    </div>
  );
};

export default RecipePage;
