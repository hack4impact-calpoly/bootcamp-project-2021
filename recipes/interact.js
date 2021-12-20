let ingSet = false;
let insSet = false;
let recipeInfo = {};

function recipeToJSON() {
    recipeInfo.recipeName = document.getElementById('recipeName').innerHTML;
    recipeInfo.recipeDescription = document.getElementById('recipeDescription').innerHTML;
    recipeInfo.recipeImage = document.getElementById('recipeImage').src;

    var ingredientList = [];
    var ulTags = document.getElementById('ing').getElementsByTagName('ul');

    for (var key of Object.keys(ulTags)) {
        var ul = ulTags[key];
        var liTags = ul.getElementsByTagName('li');

        for (var key2 of Object.keys(liTags)) {
            ingredientList.push(liTags[key2].innerHTML);
        }
    }
    recipeInfo.ingredientList = ingredientList;

    var instructionList = []
    var liTags = document.getElementById('instructionList').getElementsByTagName('li');
    var olTags = document.getElementById('prep').getElementsByTagName('ol');

    for (var key of Object.keys(olTags)) {
        var ol = olTags[key];
        var liTags = ol.getElementsByTagName('li');

        for (var key2 of Object.keys(liTags)) {
            instructionList.push(liTags[key2].innerHTML);
        }
    }
    recipeInfo.steps = instructionList;

    outputJSON(recipeInfo);
}

function outputJSON(recipeInfo) {
    document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
    document.getElementById("pre-formatter").style.padding = "16px 0px";
    document.getElementById("pre-formatter").style.borderBottom = "2px solid black";
    document.getElementById("pre-formatter").style.borderTop = "2px solid black";
    document.getElementById("pre-formatter").style.overflow = "scroll";
    document.getElementById("pre-formatter").style.color = "var(--cg-blue)";
}

function addIngredient() {
    var br = document.createElement("br");
    var li = document.createElement("li");

    if (!ingSet) {
        var ul = document.createElement("ul");
        ul.setAttribute("id", "newIngredients");

        var section = document.getElementById("ing");

        var b = document.createElement("b");
        b.appendChild(document.createTextNode("New Ingredients"));

        section.appendChild(b);
        section.appendChild(br);
        section.appendChild(ul);

        ingSet = true;
    }
    var ul = document.getElementById("newIngredients");
    var ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}

function addInstruction() {
    var br = document.createElement("br");
    var li = document.createElement("li");

    if (!insSet) {
        var ol = document.createElement("ol");
        ol.setAttribute("id", "newInstructions");

        var section = document.getElementById("prep");

        var b = document.createElement("b");
        b.appendChild(document.createTextNode("New Instructions"));

        section.appendChild(b);
        section.appendChild(br);
        section.appendChild(ol);

        insSet = true;
    }
    var ol = document.getElementById("newInstructions");
    var ingredient = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(ingredient));
    ol.appendChild(li);
    ol.appendChild(br);
}