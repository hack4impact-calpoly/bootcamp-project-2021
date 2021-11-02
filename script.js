
function recipeJSON() {
  const recipe = {};
  recipe["recipeName"] = document.getElementById("recipeName").innerHTML;
  recipe["recipeDescription"] =
    document.getElementById("recipeDescription").innerHTML;
  recipe["recipeImage"] = document.getElementById("recipeImage").src;

  const ingredientList = [];
  const ingredients = document
    .getElementById("ingredientList")
    .getElementsByTagName("li");
  for (let i = 0; i < ingredients.length; i++) {
    ingredientList.push(ingredients[i].innerHTML);
  }
  recipe["ingredientList"] = ingredientList;
  document.getElementById("recipeJSONFormat").textContent = JSON.stringify(
    recipe,
    null,
    4
  );

  const instructionList = [];
  const instructions = document
    .getElementById("instructionList")
    .getElementsByTagName("li");
  for (let i = 0; i < instructions.length; i++) {
    instructionList.push(instructions[i].innerHTML);
  }
  recipe["instructionList"] = instructionList;
  document.getElementById("json").textContent = JSON.stringify(
    recipe,
    null,
    4
  );
}

function addIngredient() {
  const ul = document.getElementById("ingredientList");
  const ingredient = document.getElementById("newIngredient").value;
  console.log(ingredient);
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(ingredient));
  ul.appendChild(li);
}

function addDirection() {
  const ol = document.getElementById("instructionList");
  const instruction = document.getElementById("newInstruction").value;
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(instruction));
  ol.appendChild(li);
}
    