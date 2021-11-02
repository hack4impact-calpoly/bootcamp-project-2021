function recipeJSON()
{
    const recipe = {};
    recipe["recipeName"] = document.getElementById("recipeName").innerHTML;
    recipe["recipeDescription"] = document.getElementById("recipeDescription").innerHTML;
    recipe["recipeImage"] = document.getElementById("recipeImage").src;


    const ingredientList = [];
    const ingredients = document.getElementById("ingredientList").getElementsByTagName("li");

    for(let i = 0; i < ingredients.length; i++)
    {
        ingredientList.push(ingredients[i].innerHTML);
    }
    recipe["ingredientList"] = ingredientList;
    document.getElementById("recipeJSONConvert").textContent = JSON.stringify(recipe, null, 4);


    const instructionList = [];
    const instructions = document.getElementById("instructionList").getElementsByTagName("li");
    
    for(let i = 0; i < instructions.length; i++)
    {
        instructionList.push(instructions[i].innerHTML);
    }
    recipe["instructionList"] = instructionList;
    document.getElementById("recipeJSONConvert").textContent = JSON.stringify(recipe, null, 4);
}

function addIngredient()
{
    const ul = document.getElementById("ingredientList");
    const ingredient = document.getElementById("addIngredient").value;
    console.log(ingredient); //logs in ingredient to the console above
    const li = document.createElement("li"); 
    li.appendChild(document.createTextNode(ingredient)); //appends to li block
    ul.append(li); //appends to ul block
}

function addInstruction()
{
    const ol = document.getElementsById("instructionList");
    const instruction = document.getElementById("addInstruction").value;
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(instruction)); //appends to li block
    ol.appendChild(li); //appends to ul block
    
}