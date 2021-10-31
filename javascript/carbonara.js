let addIngredient = () => {
    let ingredientList = document.getElementById("carbonaraIngredientList");
    let listElement = document.createElement("li");
    let newIngredient = document.getElementById("newCarbonaraIngredient").value;
    console.log(newIngredient);
    listElement.appendChild(document.createTextNode(newIngredient));
    ingredientList.appendChild(listElement)
}

let addInstruction = () => {
    let instructionList = document.getElementById("carbonaraInstructionList");
    let listElement = document.createElement("li");
    let newInstruction = document.getElementById("newCarbonaraInstruction").value;
    console.log(newInstruction);
    listElement.appendChild(document.createTextNode(newInstruction));
    instructionList.appendChild(listElement)
}

let getRecipeInfo = () => {
    let recipeInfo = {
        name: document.getElementById("carbonaraTitle").innerHTML,
        description: document.getElementById(""), //.innerHTML,  //Need to add description to recipe pages.
        image: document.getElementById("carbonaraPic").innerHTML,
        ingredientArray: [document.getElementById("carbonaraIngredientList").innerHTML], //Need to check whether this returns an array
        instructionArray: [document.getElementById("carbonaraInstructionList").innerHTML]
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