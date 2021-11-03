import React from "react";

export default function IngredientsList({ ingredients }) {
    const ingredientList = ingredients.map((ingredient) =>
        <li key={ingredient}>{ingredient}</li>
    );
    return (
        <ul>{ingredientList}</ul>
    );
}

