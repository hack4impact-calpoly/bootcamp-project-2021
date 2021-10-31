let addToList = () => {
    let ul = document.getElementById("list");
    let random = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    random.appendChild(document.createTextNode(ingredient));
    ul.appendChild(random);
}

let addToListInstruction = () => {
    let ul = document.getElementById("instructionList");
    let random = document.createElement("li");
    let instruction = document.getElementById("newInstruction").value;
    random.appendChild(document.createTextNode(instruction));
    ul.appendChild(random);
}


let recipeInfo = {}

function recipeToJSON() {
  recipeInfo.recipeName = document.getElementById('recipeName').innerHTML;
  recipeInfo.recipeDescription = document.getElementById('description').innerHTML;
  recipeInfo.backgroundImage = document.getElementById('bgimage').style.backgroundImage;
  recipeInfo.personalImage = document.getElementById('personalImage').src;
  recipeInfo.recipeLink = document.getElementById('url').href;

  // get each ingredient
  var ingredientList = []
  var liTags = document.getElementById('list').getElementsByTagName('li');
  for (var key of Object.keys(liTags)) {
    ingredientList.push(liTags[key].innerHTML);
  }
  recipeInfo.ingredientList = ingredientList;


  //get each instruction
  var instructionList = []
  var liTags = document.getElementById('instructionList').getElementsByTagName('li');
  for (var key of Object.keys(liTags)) {
    instructionList.push(liTags[key].innerHTML);
  }
  recipeInfo.steps = instructionList;

  document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
}


function addIngredient() {
  var ul = document.getElementById("ingredientList");
  var li = document.createElement("li");
  var ingredient = document.getElementById("newIngredient").value;
  li.appendChild(document.createTextNode(ingredient));
  ul.appendChild(li);
}

function addInstruction() {
  var ol = document.getElementById("instructionList");
  var li = document.createElement("li");
  var ingredient = document.getElementById("newInstruction").value;
  li.appendChild(document.createTextNode(ingredient));
  ol.appendChild(li);
}