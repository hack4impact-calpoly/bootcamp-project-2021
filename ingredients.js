function addIngredient() {
    let ul = document.getElementById("ingredientList");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}

function addStep() {
    let ol = document.getElementById("stepList");
    let li = document.createElement("li");
    let step = document.getElementById("newStep").value;
    li.appendChild(document.createTextNode(step));
    ol.appendChild(li);
}

function getRecipeJSON() {

    let recipe = {};

    recipe.recipeTitle = document.getElementById("recipeTitle").innerHTML;
    recipe.description = document.getElementById("description").innerHTML;
    recipe.image = document.getElementById("foodImage").src;

    // Ingredients list
    let ingredientList = [];
    let ingredientElements = document.getElementById("ingredientList");
    let ingredients = ingredientElements.getElementsByTagName("li");

    for (let i=0; i<ingredients.length; i++) {
        ingredientList.push(ingredients[i].innerHTML);
    }

    recipe.ingredientList = ingredientList;

    // Steps list
    let steps = [];
    let stepElements = document.getElementById("stepList");
    let stepList = stepElements.getElementsByTagName("li");

    for (let i=0; i<stepList.length; i++) {
        steps.push(stepList[i].innerHTML);
    }

    recipe.stepsList = steps;

    // Print JSON

    document.getElementById("json").textContent = JSON.stringify(recipe, undefined, 2);
    

}