let addIngredient = () => {
    let ul = document.getElementById("ingredientList");
    let random = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    random.appendChild(document.createTextNode(ingredient));
    ul.appendChild(random);
}

let addInstruction = () => {
    let ol = document.getElementById("instructionList");
    let random = document.createElement("li");
    let instruction = document.getElementById("newInstruction").value;
    random.appendChild(document.createTextNode(instruction));
    ol.appendChild(random);
}

//GENERATE THIS OBJECT

/*
let recipeInfo1 = {
    recipeName: "Chinese Cabbage and Pork Belly Stir Fry",
    recipeDescription: "This dish ",
    recipeImage: "https://thewoksoflife.com/wp-content/uploads/2015/04/cabbage-stir-fry-7.jpg",
    ingredientList: [
        "2 tablespoons oil",
        "6 oz. pork belly (our recommendation), pork loin, or chicken, thinly sliced", 
        "5 cloves garlic, smashed and cut in half",
        "5 dried red chilies, deseeded and very roughly chopped",
        "1 1/2 lb. cabbage or Taiwanese cabbage, hand-shredded into bite sized pieces, washed, and thoroughly dried (in a salad spinner, if you have it, or with a kitchen towel)",
        "2 teaspoons Shaoxing wine",
        "1 tablespoon soy sauce",
        "1/2 teaspoon sugar",
        "1 tablespoon water",
        "1/2 teaspoon Chinese black vinegar",
        "2 scallions, cut into 2-inch lengths"
    ],
    instructionList: [
        "In a wok over high heat, add the oil. Sear the meat until caramelized. Add the garlic and chili, turn down the heat to medium, and stir-fry for a minute, taking care not to burn the garlic.",
        "Add the cabbage, wine, soy sauce, sugar, and water.",
        "Turn up the heat to high, cover the lid and let the cabbage cook for 1-2 minutes.",
        "Uncover the lid, and stir in the black vinegar, scallions, and salt to taste. The cabbage should be wilted, but still slightly crunchy and caramelized.",
    ]
}
*/

let recipeInfo = {}

let recipeToJSON = () => {
    recipeInfo.recipeName = document.getElementById('recipeName').innerHTML;
    // recipeInfo.recipeDescription = document.getElementById('recipeDescription').innerHTML;
    recipeInfo.recipeImage = document.getElementById('recipeImage').src;

    // get each ingredient
    var ingredientsList = []
    var liTags = document.getElementById('ingredientList').getElementsByTagName('li');
    for (var key of Object.keys(liTags)) {
        ingredientsList.push(liTags[key].innerHTML);
    }
    recipeInfo.ingredientsList = ingredientsList;


    //get each instruction
    var instructionList = []
    var liTags = document.getElementById('instructionList').getElementsByTagName('li');
    for (var key of Object.keys(liTags)) {
        instructionList.push(liTags[key].innerHTML);
    }
    recipeInfo.steps = instructionList;

    outputJSON(recipeInfo);
}

let outputJSON = (recipeInfo) => {
    document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
    document.getElementById("pre-formatter").style.padding = "16px 0px";
    document.getElementById("pre-formatter").style.borderBottom = "2px solid black";
    document.getElementById("pre-formatter").style.borderTop = "2px solid black";
}


/*let recipeToJSON = () => {
    recipeInfo.recipeName = document.getElementById('recipeName').innerHTML;
    recipeInfo.recipeDescription = document.getElementById('recipeDescription').innerHTML;
    recipeInfo.recipeImage = document.getElementById('recipeImage').src;

    var ingredientList = []
    var liTags = document.getElementById('ingredientList').getElementsByTagName('li');
    for (var key of Object.keys(liTags)) {
        ingredientList.push(liTags[key].innerHTML);
    }
    recipeInfo.ingredientList = ingredientList;

    var instructionList = []
    var liTags = document.getElementById('instructionList').getElementsByTagName('li');
    for (var key of Object.keys(liTags)) {
        instructionList.push(liTags[key].innerHTML);
    }
    recipeInfo.instructionList = instructionList;

    outputJSON(recipeInfo);
}

let outputJSON = (recipeInfo) => {
    document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
    document.getElementById("pre-formatter").style.padding = "16px 0px";
    document.getElementById("pre-formatter").style.borderBottom = "4px solid black";
    document.getElementById("pre-formatter").style.borderTop = "4px solid black";
}*/