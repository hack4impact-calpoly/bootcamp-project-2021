let ingSet = false;
let insSet = false;
let recipeInfo = {};

function recipeToJSON() {
    recipeInfo.recipeName = document.getElementById('recipeName').innerText;
    recipeInfo.recipeDescription = document.getElementById('recipeDescription').innerText;
    recipeInfo.recipeImage = document.getElementById('recipeImage').src;

    let ingredientList = [];
    let ulTags = document.getElementById('ing').getElementsByTagName('ul');

    for (let key of Object.keys(ulTags)) {
        let ul = ulTags[key];
        let liTags = ul.getElementsByTagName('li');

        for (let key2 of Object.keys(liTags)) {
            ingredientList.push(liTags[key2].innerText);
        }
    }
    recipeInfo.ingredientList = ingredientList;

    let instructionList = []
    let liTags = document.getElementById('instructionList').getElementsByTagName('li');
    let olTags = document.getElementById('prep').getElementsByTagName('ol');

    for (let key of Object.keys(olTags)) {
        let ol = olTags[key];
        let liTags = ol.getElementsByTagName('li');

        for (let key2 of Object.keys(liTags)) {
            instructionList.push(liTags[key2].innerText);
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
    let br = document.createElement("br");
    let li = document.createElement("li");

    if (!ingSet) {
        let ul = document.createElement("ul");
        ul.setAttribute("id", "newIngredients");

        let section = document.getElementById("ing");

        let b = document.createElement("b");
        b.appendChild(document.createTextNode("New Ingredients"));

        section.appendChild(b);
        section.appendChild(br);
        section.appendChild(ul);

        ingSet = true;
    }
    let ul = document.getElementById("newIngredients");
    let ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}

function addInstruction() {
    let br = document.createElement("br");
    let li = document.createElement("li");

    if (!insSet) {
        let ol = document.createElement("ol");
        ol.setAttribute("id", "newInstructions");

        let section = document.getElementById("prep");

        let b = document.createElement("b");
        b.appendChild(document.createTextNode("New Instructions"));

        section.appendChild(b);
        section.appendChild(br);
        section.appendChild(ol);

        insSet = true;
    }
    let ol = document.getElementById("newInstructions");
    let ingredient = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(ingredient));
    ol.appendChild(li);
    ol.appendChild(br);
}