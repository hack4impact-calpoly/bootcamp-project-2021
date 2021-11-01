
function addIngredient() {
    var li = "";
    var ul = document.getElementById("newIngredient");
    var li = document.createElement("li");
    var ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    unordered.appendChild(li);
}

function addDirections() {
    var li = "";
    var ol = document.getElementById("newDirections");
    var li = document.createElement("li");
    var direction = document.getElementById("newDirections").value;
    li.appendChild(document.createTextNode(direction));
    ordered.appendChild(li);
}

let recipeInfo = {}

function convertJSON() 
{
    recipeInfo.title = document.getElementById('title').innerHTML;
    recipeInfo.recipeDescription = document.getElementById('recipeDescription').innerHTML;
    recipeInfo.image = document.getElementById('image').src;
        
    var ingredients = []
    var eachIng = document.getElementById('ordered').getElementsByTagName('li');

    var directions = []
    var eachDirect = document.getElementById('unordered').getElementsByTagName('li');
        
    for (var key of Object.keys(eachIng)) {
        ingredients.push(eachIng[key].innerHTML);
      }
    
    for (var key of Object.keys(eachDirect)) {
        directions.push(eachDirect[key].innerHTML);
      }
      
      recipeInfo.ingredients = ingredients;
      recipeInfo.directions = directions;


      outputJSON(recipeInfo);
}

  function outputJSON(recipeInfo) {
    document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
  }
  

