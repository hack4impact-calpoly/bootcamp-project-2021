
recipeConvert = () => {
  let recipe = {}
  recipe.recipeName = document.getElementById('rname').innerHTML;
  recipe.recipeDescription = document.getElementById('desc').innerHTML;
  recipe.recipeImage = document.getElementById('recipeImg').src;
  var ingredientList = []
  var liTags = document.getElementById('ingredientList').getElementsByTagName('li');
  for (var key of Object.keys(liTags)) {
    ingredientList.push(liTags[key].innerHTML);
  }
  recipe.ingredientList = ingredientList;
  var instructionList = []
  var liTags = document.getElementById('instructionList').getElementsByTagName('li');
  for (var key of Object.keys(liTags)) {
    instructionList.push(liTags[key].innerHTML);
  }
  recipe.steps = instructionList;
  document.getElementById("json-text").textContent = JSON.stringify(recipe)
}

newIngredient = () => {
  var ul = document.getElementById("ingredientList");
  var li = document.createElement("li");
  var ingredient = document.getElementById("addIngredient").value;
  li.appendChild(document.createTextNode(ingredient));
  ul.appendChild(li);
}

newInstruction = () => {
  var ol = document.getElementById("instructionList");
  var li = document.createElement("li");
  var instruction = document.getElementById("addInstruction").value;
  li.appendChild(document.createTextNode(instruction));
  ol.appendChild(li);
}
