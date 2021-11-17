let recipeInJSON = {}

let recipeToJSON = () => {
    recipeInJSON.recipeName = document.getElementById("recipeName").innerHTML;
    recipeInJSON.recipeSubtitle = document.getElementById("recipeSubtitle").innerHTML;
    recipeInJSON.recipeImage = document.getElementById("recipeImage").src;

    // ingredient list
    let ingredientList = [];
    let liTags = document.getElementById("ingredientList").getElementsByTagName("li");
    for (const key of Object.keys(liTags)) {
        ingredientList.push(liTags[key].innerHTML);
    }
    recipeInJSON.ingredientList = ingredientList;

    // instruction list
    let instructionList = [];
    liTags = document.getElementById("instructionList").getElementsByTagName("li");
    for (const key of Object.keys(liTags)) {
        instructionList.push(liTags[key].innerHTML);
    }
    recipeInJSON.instructionList = instructionList;

    outputRecipe(recipeInJSON);
}

let outputRecipe = () => {
    document.getElementById("json").textContent = JSON.stringify(recipeInJSON, null, 3);
    document.getElementById("jsonBlock").classList.add("active");
}

let addIngredient = () => {
    let ingredientList = document.getElementById("ingredientList");
    let newListItem = document.createElement("li");
    let newIngredient = document.getElementById("inputIngredient").value;
    newListItem.appendChild(document.createTextNode(newIngredient));
    ingredientList.appendChild(newListItem);
}

let addInstruction = () => {
    let instructionList = document.getElementById("instructionList");
    let newListItem = document.createElement("li");
    let newInstruction = document.getElementById("inputInstructions").value;
    newListItem.appendChild(document.createTextNode(newInstruction));
    instructionList.appendChild(newListItem);
}
