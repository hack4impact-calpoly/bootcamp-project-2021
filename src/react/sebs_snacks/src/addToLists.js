export function addIngredient (ingredientList, newIngredient) {
    let JSingredientList = document.getElementById(ingredientList);
    let listElement = document.createElement("li");
    console.log(newIngredient);
    listElement.appendChild(document.createTextNode(newIngredient));
    JSingredientList.appendChild(listElement)
}

export function addInstruction(instructionList, instruction) {
    let JSinstructionList = document.getElementById(instructionList);
    let listElement = document.createElement("li");
    let newInstruction = document.getElementById(instruction).value;
    console.log(newInstruction);
    listElement.appendChild(document.createTextNode(newInstruction));
    JSinstructionList.appendChild(listElement)
}