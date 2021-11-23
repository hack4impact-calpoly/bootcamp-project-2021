let addToList = () => {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}

let addToListInstruction = () => {
    let ul = document.getElementById("instructionList");
    let li = document.createElement("li");
    let instruction = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(instruction));
    ul.appendChild(li);
}

let recipeInfo = {}
function recipeToJSON() {
  recipeInfo.recipeName = document.getElementById('recipeName').innerHTML;
  recipeInfo.recipeDescription = document.getElementById('description').innerHTML;
  recipeInfo.backgroundImage = document.getElementById('bgimage').style.backgroundImage;
  recipeInfo.personalImage = document.getElementById('personalImage').src;
  recipeInfo.recipeLink = document.getElementById('url').href;

  var ingredientList = []
  var liTags = document.getElementById('list').getElementsByTagName('li');
  for (var key of Object.keys(liTags)) {
    ingredientList.push(liTags[key].innerHTML);
  }
  recipeInfo.ingredients = ingredientList;

  var instructionList = []
  var liTags = document.getElementById('instructionList').getElementsByTagName('li');
  for (var key of Object.keys(liTags)) {
    instructionList.push(liTags[key].innerHTML);
  }
  recipeInfo.instructions = instructionList;

  document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
}