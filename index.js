let addIngredient = () => {
    let ul = document.getElementById("ingredients");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}