let addIngredient = () => {
  let ul = document.getElementById("ingredients");
  let li = document.createElement("li");
  let ingredient = document.getElementById("newIngredient").value;
  li.appendChild(document.createTextNode(ingredient));
  ul.appendChild(li);
};

let addInstruction = () => {
  let ol = document.getElementById("instructions");
  let li = document.createElement("li");
  let instruction = document.getElementById("newInstruction").value;
  li.appendChild(document.createTextNode(instruction));
  ol.appendChild(li);
};

let convertToJSON = () => {
  let recipeInfo = {
    recipeName: document.getElementById("name").innerText,
    recipeDescription: document.getElementById("description").innerText,
    recipeImage: document.getElementById("image").src,
    ingredientList: [],
    instructionList: []
  };

  let ingredientLists = document.querySelectorAll("ul");
  for (ingredientList of ingredientLists) {
    let ingredients = ingredientList.getElementsByTagName("li");
    for (ingredient of ingredients) {
      recipeInfo.ingredientList.push(ingredient.innerText);
    }
  }
  let instructions = document
    .getElementById("instructions")
    .getElementsByTagName("li");
  for (instruction of instructions) {
    recipeInfo.instructionList.push(instruction.innerText);
  }

  let div = document.getElementById("jsonConverter");
  let pre = document.createElement("pre");
  let code = document.createElement("code");
  code.appendChild(
    document.createTextNode(JSON.stringify(recipeInfo, null, " "))
  );
  pre.appendChild(code);
  div.appendChild(pre);
};
