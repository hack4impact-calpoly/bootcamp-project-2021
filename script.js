const recipeToJSON = () => {
    recipe = {};
    recipe.name = document.getElementById("recipeName").innerHTML;
    recipe.description = document.getElementById("recipeDesc").innerHTML;
    recipe.image = document.getElementById("recipeImg").src;

    recipe.ingredients = [];
    for (li of document.getElementById("ingredients").getElementsByTagName("li")) {
        recipe.ingredients.push(li.innerHTML);
    };
    
    recipe.instructions = [];
    for (li of document.getElementById("instructions").getElementsByTagName("li")) {
        recipe.instructions.push(li.innerHTML);
    };

    document.getElementById("json").textContent = JSON.stringify(recipe, undefined, 2);
    document.getElementById("preFormatter").style.height = "auto";
    document.getElementById("preFormatter").style.padding = "10px 0px";
    document.getElementById("preFormatter").style.marginTop = "20px";
    document.getElementById("preFormatter").style.borderBottom = "5px solid black";
    document.getElementById("preFormatter").style.borderTop = "5px solid black";
}

const addIngredients = () => {
    let ul = document.getElementById("ingredients");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value.trim();
    let pos = document.getElementById("ingredientPos").value.trim();
    if (ingredient != "") {
        li.appendChild(document.createTextNode(ingredient));
        if (pos != "" && !isNaN(pos) && +pos > 0 && +pos <= ul.children.length) {
            ul.insertBefore(li, ul.children[+pos - 1]);
        } else {
            ul.appendChild(li);
        }
        document.getElementById("newIngredient").value = "";
        document.getElementById("ingredientPost").value = "";
    }
}

const addInstruction = () => {
    let ol = document.getElementById("instructions");
    let li = document.createElement("li");
    let instruction = document.getElementById("newInstruction").value.trim();
    let pos = document.getElementById("instructionPos").value.trim();
    if (instruction != "") {
        li.appendChild(document.createTextNode(instruction));
        if (pos != "" && !isNaN(pos) && +pos > 0 && +pos <= ol.children.length) {
            ol.insertBefore(li, ol.children[+pos - 1]);
        } else {
            ol.appendChild(li);
        }
        document.getElementById("newInstruction").value = "";
        document.getElementById("instructionPos").value = "";
    }
}

const deleteItem = li => li.remove();