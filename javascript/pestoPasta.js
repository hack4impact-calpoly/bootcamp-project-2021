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
let extractArray = (ListType) => {
    let Array = [];
    let ListElements = document.getElementById(ListType).getElementsByTagName("li");
    let i = 0;
    while (i < (ListElements.length)){
        Array.push(ListElements[i].innerHTML)
        i++;
    }
    console.log(Array);
    return Array;
}

let getRecipeInfo = () => {
    let recipeInfo = {
        name: document.getElementById("pestoPastaTitle").innerHTML,
        description: document.getElementById("pestoPastaDesc").innerHTML,
        image: document.getElementById("pestoPic").innerHTML,
        ingredientArray: [... extractArray("pestoPastaIngredientList")], //Need to check whether this returns an array
        instructionArray: [... extractArray("pestoPastaInstructionList")]
    }
    console.log("Scraped Recipe Info");
    return recipeInfo;
}

let convertToJSON = () => {
    let recipeJSON = JSON.stringify(getRecipeInfo());
    let JSONText = document.getElementById("JSONCode");
    console.log(recipeJSON);
    JSONText.append(document.createTextNode(recipeJSON));
    return recipeJSON;
} //Check how to implement the JSON into the page