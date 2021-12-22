let informationRecipe = {}

function recipeToJSON() {
   informationRecipe.name = document.getElementById('name').innerHTML;
   informationRecipe.description = document.getElementById('description').innerHTML;
   informationRecipe.image = document.getElementById('image').src;

  var ingredientlist = []
  var liElements = document.getElementById('ingredientlist').getElementsByTagName('li');
  for (var key of Object.keys(liElements)) {
    ingredientlist.push(liElements[key].innerHTML);
  }
  informationRecipe.ingredientlist = ingredientlist;


  var instructionlist = []
  var liElements = document.getElementById('instructionlist').getElementsByTagName('li');
  for (var key of Object.keys(liElements)) {
    instructionlist.push(liElements[key].innerHTML);
  }
  informationRecipe.steps = instructionlist;

  outputJSON(informationRecipe);
}

function outputJSON(informationRecipe) {
  document.getElementById("json").textContent = JSON.stringify(informationRecipe, undefined, 2);
  document.getElementById("pre-formatter").style.padding = "16px 0px";
  document.getElementById("pre-formatter").style.borderBottom = "4px solid black";
  document.getElementById("pre-formatter").style.borderTop = "4px solid black";
}

function addIngredient() {
    var ul = document.getElementById("ingredientlist");
    var li = document.createElement("li");
    var ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    li.setAttribute("class", "GHInfo");
    ul.appendChild(li);
}
  
function addInstruction() {
    var ol = document.getElementById("instructionlist");
    var li = document.createElement("li");
    var ingredient = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(ingredient));
    li.setAttribute("class", "GHInfo");
    ol.appendChild(li);
}