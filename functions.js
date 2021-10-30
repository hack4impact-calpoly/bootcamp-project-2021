let addIngredient = () => {
    let newIngredient = document.getElementById("ingredient_input").value;
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(newIngredient));
    document.getElementById("ingredient_list").appendChild(node);
    document.getElementById("ingredient_input").value = "";
}

let addStep = () => {
    let newStep = document.getElementById("step_input").value;
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(newStep));
    document.getElementById("step_list").appendChild(node);
    document.getElementById("step_input").value = "";
}

let recipeInformation = {}

function recipeToJSON() {
    recipeInformation.recipeName = document.getElementById('name').innerHTML;
    recipeInformation.recipeDescription = document.getElementById('description').innerHTML;
    recipeInformation.recipeImage = document.getElementById('image').src;
    var ingredientList = []
    var liTags = document.getElementById('ingredient_list').getElementsByTagName('li');
    for (var item of Object.keys(liTags)) {
        ingredientList.push(liTags[item].innerHTML);
    }
    recipeInformation.ingredientList = ingredientList;
    var instructionList = []
    var liTags = document.getElementById('step_list').getElementsByTagName('li');
    for (var item of Object.keys(liTags)) {
        instructionList.push(liTags[item].innerHTML);
    }
    recipeInformation.steps = instructionList;

    document.getElementById("json").textContent = JSON.stringify(recipeInformation);
}

