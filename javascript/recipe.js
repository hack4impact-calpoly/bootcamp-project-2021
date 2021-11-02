let addIngredient = (ingredientList, ingredient) => {
    let JSingredientList = document.getElementById(ingredientList);
    let listElement = document.createElement("li");
    let newIngredient = document.getElementById(ingredient).value;
    console.log(newIngredient);
    listElement.appendChild(document.createTextNode(newIngredient));
    JSingredientList.appendChild(listElement)
}

let addInstruction = (instructionList, instruction) => {
    let JSinstructionList = document.getElementById(instructionList);
    let listElement = document.createElement("li");
    let newInstruction = document.getElementById(instruction).value;
    console.log(newInstruction);
    listElement.appendChild(document.createTextNode(newInstruction));
    JSinstructionList.appendChild(listElement)
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

let getRecipeInfo = (Title, Desc, Pic, ingredientList, instructionList) => {
    let recipeInfo = {
        name: document.getElementById(Title).innerHTML,
        description: document.getElementById(Desc).innerHTML,
        image: document.getElementById(Pic).innerHTML,
        ingredientArray: [... extractArray(ingredientList)], //Need to check whether this returns an array
        instructionArray: [... extractArray(instructionList)]
    }
    console.log("Scraped Recipe Info");
    return recipeInfo;
}

let convertToJSON = (Title, Desc, Pic, ingredientList, instructionList) => {
    let recipeJSON = JSON.stringify(getRecipeInfo(Title, Desc, Pic, ingredientList, instructionList));
    let JSONText = document.getElementById("JSONCode");
    console.log(recipeJSON);
    JSONText.append(document.createTextNode(recipeJSON));
    return recipeJSON;
} //Check how to implement the JSON into the page