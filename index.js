let addIngredient = () => {
    let ul = document.getElementById("ingredients");
    let random = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    console.log(ingredient);
    random.appendChild(document.createTextNode(ingredient));
    ul.appendChild(random);
}

let addStep = () => {
    let ul = document.getElementById("steps");
    let random = document.createElement("li");
    let step = document.getElementById("newStep").value;
    console.log(step);
    random.appendChild(document.createTextNode(step));
    ul.appendChild(random);
}

let transformIntoJson = () => {
    let jsonRecipe = document.getElementById("json-form");
    let r = document.createElement("p");
    
    let recipe = {
        "recipeName" : '',
        "recipeDescription" : '',
        "recipeImage" : '',
        "ingredientList" : [],
        "steps" : [],
    }

    let name = document.getElementById("name");
    recipe["recipeName"] = name.innerText;

    let desc = document.getElementById("description");
    recipe["recipeDescription"] = desc.innerText;

    let img = document.getElementById("image");
    recipe["recipeImage"] = img.src;

    let ingred = document.getElementById("ingredients");
    let temp = ingred.innerText;
    let ingredArr = temp.split("\n");
    recipe["ingredientList"] = ingredArr;

    let s = document.getElementById("steps");
    temp = s.innerText;
    let stepArr = temp.split("\n");
    recipe["steps"] = stepArr;

    r.innerHTML = JSON.stringify(recipe, null, 10);
    jsonRecipe.appendChild(r)
}