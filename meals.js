let recipeInfo = {}

function recipeToJSON() {
  recipeInfo.recipeName = document.getElementById('recipeName').innerHTML;
  recipeInfo.recipeDescription = document.getElementById('recipeDescription').innerHTML;
  recipeInfo.recipeImage = document.getElementById('recipeImage').src;

  // get each ingredient
  var ingredientList = []
  var liTags = document.getElementById('igList').getElementsByTagName('li');
  for (var key of Object.keys(liTags)) {
    ingredientList.push(liTags[key].innerHTML);
  }
  recipeInfo.ingredientList = ingredientList;
  //get each instruction
  var instructionList = []
  var liTags = document.getElementById('prep').getElementsByTagName('li');
  for (var key of Object.keys(liTags)) {
    instructionList.push(liTags[key].innerHTML);
  }
  recipeInfo.steps = instructionList;

  outputJSON(recipeInfo);
}

function outputJSON(recipeInfo) {
  document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
  document.getElementById("pre-formatter").style.padding = "16px 0px";
  document.getElementById("pre-formatter").style.borderBottom = "4px solid black";
  document.getElementById("pre-formatter").style.borderTop = "4px solid black";
}

function addIngredient() {
    var ul = document.getElementById("igList");
    var li = document.createElement("li");
    var ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
  }
  
  function addInstruction() {
    var ol = document.getElementById("prep");
    var li = document.createElement("li");
    var ingredient = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(ingredient));
    ol.appendChild(li);
  }