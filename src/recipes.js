let addIngredient = () => {
    // get ingredient list
    let ul = document.getElementById("ingredient-list");
    // create new list element
    let li = document.createElement("li");
    // get inputted ingredient
    let newIngredient = document.getElementById("new-ingredient").value;
    // set new ingredient list element
    li.appendChild(document.createTextNode(newIngredient));
    // add new ingredient to list
    ul.appendChild(li);
}

let addInstruction = () => {
    let ol = document.getElementById("instruction-list");
    let li = document.createElement("li");
    let newInstruction = document.getElementById("new-instruction").value;
    li.appendChild(document.createTextNode(newInstruction));
    ol.appendChild(li);
}