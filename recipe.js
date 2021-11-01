function addIngredient() {
   var ul = document.getElementById("ingredient-list");
   var li = document.createElement("li");
   var ingredient = document.getElementById("newIngredient").value;
   li.appendChild(document.createTextNode(ingredient));
   ul.appendChild(li);
}

function addStep() {
   var ol = document.getElementById("steps-list");
   var li = document.createElement("li");
   var step = document.getElementById("newStep").value;
   li.appendChild(document.createTextNode(step));
   ol.appendChild(li);
}

let recipeInfo = {}

function convertToJSON() {
   recipeInfo.name = document.getElementById("recipeName").innerText;
   recipeInfo.desc = document.getElementById("text").innerText;
   recipeInfo.image = document.getElementById("image").src; 

   var ingredientList = [];
   var tags = document.getElementById("ingredient-list").getElementsByTagName('li');

   for(var key of Object.keys(tags)) {
      ingredientList.push(tags[key].innerHTML);
   }

   recipeInfo.ingredientList = ingredientList;

   var instructionList = [];
   var tags = document.getElementById("steps-list").getElementsByTagName('li');

   for(var key of Object.keys(tags)) {
      instructionList.push(tags[key].innerHTML);
   }
   recipeInfo.instructionList = instructionList;
   outputJSON(recipeInfo);
}

function outputJSON(recipeInfo) {
   document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
   document.getElementById("pre-formatter").style.padding = "16px 0px";
   document.getElementById("pre-formatter").style.contain = "content";
   document.getElementById("pre-formatter").style.borderBottom = "4px solid black";
   document.getElementById("pre-formatter").style.borderTop = "4px solid black";
 }




