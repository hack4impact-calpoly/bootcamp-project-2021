let addIngredient = () => {
    let ingredientList = document.getElementById("spaghettiIngredientList");
    let listElement = document.createElement("li");
    let newIngredient = document.getElementById("newSpaghettiIngredient").value;
    console.log(newIngredient);
    listElement.appendChild(document.createTextNode(newIngredient));
    ingredientList.appendChild(listElement)
}

let addInstruction = () => {
    let instructionList = document.getElementById("spaghettiInstructionList");
    let listElement = document.createElement("li");
    let newInstruction = document.getElementById("newSpaghettiInstruction").value;
    console.log(newInstruction);
    listElement.appendChild(document.createTextNode(newInstruction));
    instructionList.appendChild(listElement)
}

let getRecipeInfo = () => {
    let recipeInfo = {
        name: document.getElementById("spaghettiTitle").innerHTML,
        description: document.getElementById(""), //.innerHTML,  //Need to add description to recipe pages.
        image: document.getElementById("spaghettiPic").innerHTML,
        ingredientArray: [document.getElementById("spaghettiIngredientList").innerHTML], //Need to check whether this returns an array
        instructionArray: [document.getElementById("spaghettiInstructionList").innerHTML]
    }
    console.log("Scraped Recipe Info");
    console.log(recipeInfo);
    return recipeInfo;
}

let convertToJSON = () => {
    let recipeJSON = JSON.stringify(getRecipeInfo());
    console.log(recipeJSON);
    return recipeJSON;

} //Check how to implement the JSON into the page