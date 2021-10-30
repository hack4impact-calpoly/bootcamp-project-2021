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

let convertToJSON = () => {
    let conversion = {};
    conversion.recipeName = document.getElementById("recipe-name").innerHTML;
    conversion.recipeDescription = document.getElementById("recipe-description").innerHTML;
    conversion.recipeImage = document.getElementById("recipe-image").innerHTML;

    // create ingredient list
    let ingredientList = document.getElementById("ingredient-list").getElementsByTagName("li");
    console.log(ingredientList);
    let tempList = []
    for (let i = 0; i < ingredientList.length; i++) {
        tempList.push(ingredientList[i].innerHTML);
    }
    conversion.ingredientList = tempList;

    // create instruction list
    let instructionList = document.getElementById("instruction-list").getElementsByTagName("li");
    console.log(instructionList);
    let tempList2 = []
    for (let j = 0; j < instructionList.length; j++) {
        tempList2.push(instructionList[j].innerHTML);
    }
    conversion.instructionList = tempList2;

    // display json format
    displayJSON(conversion);
}

let displayJSON = (conversion) => {
    document.getElementById("conversion").textContent = JSON.stringify(conversion, null, 2);
    document.getElementById("pre-format").style.padding = "20px";
    document.getElementById("conversion").style.maxBlockSize = "300px";
}