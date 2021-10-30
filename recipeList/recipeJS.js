function addIngredient() {
    var ulUnorder = document.getElementById("ingredients"); //gets the list
    var liElement = document.createElement("li"); //creates new element
    var ingredient = document.getElementById("addIngredient").value;
    liElement.appendChild(document.createTextNode(ingredient));
    ulUnorder.appendChild(liElement); //adds li to end of unordered list
}

function addInstruction() {
    var olOrder = document.getElementById("instructions");
    var liElement = document.createElement("li");
    var ingredient = document.getElementById("addInstruction").value;
    liElement.appendChild(document.createTextNode(ingredient));
    olOrder.appendChild(liElement);
}

let recipeJSONObject = {}
function convertJSON() {
    //Finding recipe name, info, and image for JSON object
    recipeJSONObject.name = document.getElementById('recipe').innerHTML;
    recipeJSONObject.info = document.getElementById('info').innerHTML;
    recipeJSONObject.image = document.getElementById('image').src;
    //Finding ingredients from html page
    var ingredients = []
    var liTag= document.getElementById('ingredients').getElementsByTagName('li');
    for (var i of Object.keys(liTag)) {
        ingredients.push(liTag[i].innerHTML);
    }
    recipeJSONObject.ingredients = ingredients;
    //Finding instructions from html page
    var instructions = []
    var liTag = document.getElementById('instructions').getElementsByTagName('li');
    for (var i of Object.keys(liTag)) {
        instructions.push(liTag[i].innerHTML);
    }
    recipeJSONObject.instructions = instructions;
    //Calls function to display JSON object
    outputJSON(recipeJSONObject);
}

function outputJSON(recipeJSONObject) {
    document.getElementById("json").textContent = JSON.stringify(recipeJSONObject, undefined, 1);
}