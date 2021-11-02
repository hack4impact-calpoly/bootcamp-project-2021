//let recipeInfo = {}
const recipeToJson = () => 
{
    recipe = {};
    recipe.recipeName = document.getElementById('recipeName').innerHTML;
    recipie.recipeDescription = document.getElementById('recipeDescription').innerHTML;
    recipe.recipeImage = document.getElementById('recipeImage').src;


    recipe.ingredients = [];
    for (li of document.getElementById("ingredients").getElementsByTagName("li"))
    {
      recipe.ingredients.push(li.innerHTML);
    };

    document.getElementById("json").textContent = JSON.stringify(recipe, undefined, 2);
    document.getElementById("pre-formatter").style.padding = "16px 0px";
    document.getElementById("pre-formatter").style.borderBottom = "4px solid black";
    document.getElementById("pre-formatter").style.borderTop = "4px solid black";
}

const addIngredient = () =>
{
  let ul = document.getElementById("ingredients");
  let li = document.createElement("li");
  let ingredient = document.getElementById("newIngredient").value.trim();
  li.appendChild(document.createTextNode(ingredient));
  ul.appendChild(li);

  document.getElementById("newIngredient").value = "";
  document.getElementById("ingredientPost").value = "";
}

const addInstruction = () => 
{
  let ol = document.getElementById("instructionList");
  let li = document.createElement("li");
  let instruction = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(instruction));
    ol.appendChild(li);
}
    