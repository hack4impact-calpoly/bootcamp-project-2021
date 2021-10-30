//let recipeObject = {};

let recipeToJSON = () => {
    let recipeObject = {};
    recipeObject.name = document.getElementById("recipeName").innerHTML;
    recipeObject.description = document.getElementById("recipe-description").innerHTML;
    recipeObject.image = document.getElementById("recipe-img").src;

    let ingredients = [];
    let liTags1 = document.getElementById("ingredients-list").getElementsByTagName("li");
    for (let key of Object.keys(liTags1)) {
        ingredients.push(liTags1[key].innerHTML);
    }
    recipeObject.ingredients = ingredients;

    let instructions = [];
    let liTags2 = document.getElementById("instructions-list").getElementsByTagName("li");
    for (let key of Object.keys(liTags2)) {
        instructions.push(liTags2[key].innerHTML);
    }
    recipeObject.instructions = instructions;
    console.log(recipeObject);

    document.getElementById("json").textContent = JSON.stringify(recipeObject, undefined, 2);
    document.getElementById("JSON-section").style.borderBottom = "3px solid black";
}


let addIngredient = () => {
    let ul = document.getElementById("ingredients-list");
    let li = document.createElement("li");
    let ingredient = document.getElementById("new-ingredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
    document.getElementById("new-ingredient").value = "";
}

let addInstruction = () => {
    let ol = document.getElementById("instructions-list");
    let li = document.createElement("li");
    let instruction = document.getElementById("new-instruction").value;
    li.appendChild(document.createTextNode(instruction));
    ol.appendChild(li);
    document.getElementById("new-instruction").value = "";
}