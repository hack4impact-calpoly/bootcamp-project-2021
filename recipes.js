let addIngredient = () => {
  let ul = document.getElementById("ingredients");
  let listElement = document.createElement("li");
  let ingredient = document.getElementById("newIngredient").value;
  listElement.appendChild(document.createTextNode(ingredient));
  ul.appendChild(listElement);
};

let addInstruction = () => {
  let ul = document.getElementById("instructions");
  let listElement = document.createElement("li");
  let ingredient = document.getElementById("newInstruction").value;
  listElement.appendChild(document.createTextNode(ingredient));
  ul.appendChild(listElement);
};

let recipeHolder = {};

let jsonConvertor = () => {
  recipeHolder.dishName = document.getElementById("dishName").innerHTML;
  recipeHolder.description = document.getElementById("dishDesc").innerHTML;
  recipeHolder.photo = document.getElementById("dishPhoto").src;

  let recipeIngredients = [];
  let ingredientTags = document
    .getElementById("ingredients")
    .getElementsByTagName("li");
  for (var tag of Object.keys(ingredientTags)) {
    recipeIngredients.push(ingredientTags[tag].innerHTML);
  }
  recipeHolder.ingredients = recipeIngredients;

  let recipeInstructions = [];
  let instructionTags = document
    .getElementById("instructions")
    .getElementsByTagName("li");
  for (var tag of Object.keys(instructionTags)) {
    recipeInstructions.push(instructionTags[tag].innerHTML);
  }
  recipeHolder.instructions = recipeInstructions;

  document.getElementById("codeDesc").innerHTML =
    "Here's the JSON! Ignore the weird formatting...";
  document.getElementById("json").innerHTML = JSON.stringify(
    recipeHolder,
    undefined,
    2
  );
  document.getElementById("codeDesc").style.padding = "8px";
  document.getElementById("preCode").style.padding = "0px 8px";
};
