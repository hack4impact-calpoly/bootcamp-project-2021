function addIngredient() {
    let ul = document.getElementById("ingredient-list");
    let li = document.createElement("li");
    let newIngredient = document.getElementById("new-ingredient").value;
    li.appendChild(document.createTextNode(newIngredient));
    ul.appendChild(li)
}

function addInstruction() {
    let ol = document.getElementById("procedure-list");
    console.log(ol);
    let li = document.createElement("li");
    let newInstruction = document.getElementById("new-instruction").value;
    console.log(li);
    li.appendChild(document.createTextNode(newInstruction));
    ol.appendChild(li);
}

let recipeInfo = {};

function recipeToJSON() {
    recipeInfo.recipeName = document.getElementById("recipe-name").innerHTML;
    recipeInfo.recipeImage = document.getElementById("recipe-page-image").src;

    let ingredients = [];
    let ingrList = document.getElementById("ingredient-list").getElementsByTagName("li");
    for (let key of Object.keys(ingrList)) {ingredients.push(ingrList[key].innerHTML);}

    recipeInfo.ingredients = ingredients;

    let instructions = [];
    let instrList = document.getElementById("procedure-list").getElementsByTagName("li");
    for (let key of Object.keys(instrList)) {instructions.push(instrList[key].innerHTML);}

    recipeInfo.procedure = instructions;

    console.log(recipeInfo);

    document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2)
}