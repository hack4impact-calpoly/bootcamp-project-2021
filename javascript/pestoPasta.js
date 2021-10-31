let addIngredient = () => {
    let ingredientList = document.getElementById("pestoPastaIngredientList");
    let listElement = document.createElement("li");
    let newIngredient = document.getElementById("newPestoPastaIngredient").value;
    console.log(newIngredient);
    listElement.appendChild(document.createTextNode(newIngredient));
    ingredientList.appendChild(listElement)
}

let addInstruction = () => {
    let instructionList = document.getElementById("pestoPastaInstructionList");
    let listElement = document.createElement("li");
    let newInstruction = document.getElementById("newPestoPastaInstruction").value;
    console.log(newInstruction);
    listElement.appendChild(document.createTextNode(newInstruction));
    instructionList.appendChild(listElement)
}

let getRecipeInfo = () => {
    let recipeInfo = {
        name: document.getElementById("pestoPastaTitle").innerHTML,
        description: document.getElementById(""), //.innerHTML,  //Need to add description to recipe pages.
        image: document.getElementById("pestoPastaPic").innerHTML,
        ingredientArray: [document.getElementById("pestoPastaIngredientList").innerHTML], //Need to check whether this returns an array
        instructionArray: [document.getElementById("pestoPastaInstructionList").innerHTML]
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