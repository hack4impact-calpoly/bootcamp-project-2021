let recipeInfo = {}
function recipeTToJson()
{
    recipeInfo.recipeName = document.getElementById('recipeName').innerHTML;
    recipieInfo.recipeDescription = document.getElementById('recipeDescription').innerHTML;
    recipeInfo.recipeImage = document.getElementById('recipeImage').src;


    var ingredientList = []
    var liTags = document.getElementById(ingredientList).getElementsByTagName('li');
    for (var key of Object.keys(liTags)) {
        ingredientList.push(liTags[key].innerHTML);
      }
      recipeInfo.ingredientList = ingredientList;

      var instructionList = []
      var liTags = document.getElementById('instructionList').getElementsByTagName('li');
      for (var key of Object.keys(liTags)) {
        instructionList.push(liTags[key].innerHTML);
      }
      recipeInfo.steps = instructionList;
    
      outputJSON(recipeInfo);
    }

    function outputJSON(recipeInfo) {
        document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
        document.getElementById("pre-formatter").style.padding = "16px 0px";
        document.getElementById("pre-formatter").style.borderBottom = "4px solid black";
        document.getElementById("pre-formatter").style.borderTop = "4px solid black";
      }
      
      
      function addIngredient() {
        var ul = document.getElementById("ingredientList");
        var li = document.createElement("li");
        var ingredient = document.getElementById("newIngredient").value;
        li.appendChild(document.createTextNode(ingredient));
        ul.appendChild(li);
      }
      
      function addInstruction() {
        var ol = document.getElementById("instructionList");
        var li = document.createElement("li");
        var ingredient = document.getElementById("newInstruction").value;
        li.appendChild(document.createTextNode(ingredient));
        ol.appendChild(li);
      }
    