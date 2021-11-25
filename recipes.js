let recipeInfo = {}

let addIngredient = () => {
    let ul = document.getElementById("ingredients");
    let random = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    console.log(ingredient);
    random.appendChild(document.createTextNode(ingredient));
    ul.appendChild(random);
  }

  let addInstruction = () => {
    let ol = document.getElementById("instructions");
    let random = document.createElement("li");
    let instruction = document.getElementById("newInstruction").value;
    console.log(instruction);
    random.appendChild(document.createTextNode(instruction));
    ol.appendChild(random);
  }
////////////////////////////////////////////////////
  function recipeToJSON()
  {
    recipeInfo.recipeName = document.getElementById('rName').innerHTML;
    recipeInfo.recipeDescription = document.getElementById('rDesc').innerHTML;
    recipeInfo.recipeImage = document.getElementById('pic').src;
  
    // get each ingredient
    var ingredientList = []
    var liTags = document.getElementById('ingredients').getElementsByTagName('li');
    for (var key of Object.keys(liTags))
    {
      ingredientList.push(liTags[key].innerHTML);
    }
    recipeInfo.ingredientList = ingredientList;
  
  
    //get each instruction
    var instructionList = []
    var liTags = document.getElementById('instructions').getElementsByTagName('li');
    for (var key of Object.keys(liTags))
    {
      instructionList.push(liTags[key].innerHTML);
    }
    recipeInfo.steps = instructionList;
  
    outputJSON(recipeInfo);
  }
  
  function outputJSON(recipeInfo)
  {
    document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
    document.getElementById("pre-formatter").style.padding = "16px 0px";
  }
  