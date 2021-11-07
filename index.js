let addIngredient = () => {
    let ul = document.getElementById("ingredients");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    console.log(ingredient);
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}

let addInstruction = () => {
    let ul = document.getElementById("instructions");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newInstruction").value;
    console.log(ingredient);
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}

let convertJSON = () => {
    let recipeInfo = {}

    recipeInfo.recipeName = document.getElementById("Recipe_Name").innerHTML;
    console.log("Recipe name retrieved");
    recipeInfo.recipeDescription = document.getElementById("Recipe_Description").textContent;
    console.log("Recipe description retrieved");
    recipeInfo.recipeImage = document.getElementById("Recipe_Image").src;
    console.log("Recipe image retrieved.");
    var recipeIngredientList = []
    var liTags = document.getElementById("ingredients").getElementsByTagName("li");
    for (let key of Object.keys(liTags)) {
        recipeIngredientList.push(liTags[key].innerHTML);
    }

    var recipeInstructionList = []
    var liTags = document.getElementById("instructions").getElementsByTagName("li");
    for (let key of Object.keys(liTags)) {
        recipeInstructionList.push(liTags[key].innerHTML);
    }

    recipeInfo.recipeIngredients = recipeIngredientList;
    recipeInfo.recipeInstructions = recipeInstructionList;


    document.getElementById("JSON_Display").textContent = JSON.stringify(recipeInfo, undefined, 2);
}




