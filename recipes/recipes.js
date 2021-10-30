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

  const directionsList = [];
  const directions = document
    .getElementById("directionsList")
    .getElementsByTagName("li");
  for (let i = 0; i < directions.length; i++) {
    directionsList.push(directions[i].innerHTML);
  }
  recipe["directionsList"] = directionsList;
  document.getElementById("recipeJSONFormat").textContent = JSON.stringify(
    recipe,
    null,
    4
  );
}

function addIngredient() {
  const ul = document.getElementById("ingredientList");
  const ingredient = document.getElementById("ingredientInput").value;
  console.log(ingredient);
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(ingredient));
  ul.appendChild(li);
}

function addDirection() {
  const ol = document.getElementById("directionsList");
  const directions = document.getElementById("directionsInput").value;
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(directions));
  ol.appendChild(li);
}
