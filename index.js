let addIngredient = () => {
    let ul = document.getElementById("ingredients");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    console.log(ingredient);
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}

let addInstruction = () => {
    let ul = document.getElementById("instructions");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newInstruction").value;
    console.log(ingredient);
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}
