let shrimp_info = {

    recipeName: "Shrimp Scampi",

    recipeDescription: "You may be asking yourself, what is Shrimp Scampi?\nThis is a common question, because the name can be \nconfusing and scary to new cooks. The word \"scampi\"\n is actually spanish for pasta. So the name of our dish\ntranslates to \"shrimp pasta\" how fun!",

    recipeImage: "blt.jpg",

    ingrediantList: [
        "10 large shrimp, heads off and unpeeled",
        "1 tablespoon olive oil",
        "3 cloves garlic, minced",
        "4 tablespoons butter",
        "½ teaspoon dried oregano",
    ],

    instructionList: [
        "With a sharp knife, cut shrimp in half so that the meat is exposed in the shell.",
        "In a small saucepan, heat olive oil and lightly fry the garlic until just softened. Add\n butter and Oregano. Heat until butter has melted.",
        "Preheat an outdoor grill for medium heat and lightly oil grate.",
        "Lay shrimp out on a tray and brush generously with the butter mixture. Grill shrimp until lightly golden."
    ]
}

let jsonify = () => {
    let space = document.getElementById("jsondiv");
    space.innerHTML = "<pre> " + JSON.stringify(shrimp_info, null, 10) + "</pre>";

}

let addIngr = () => {
    let list = document.getElementById("ingr");
    let li = document.createElement("li");
    let ingrediant = document.getElementById("newIngr").value;
    li.appendChild(document.createTextNode(ingrediant));
    console.log(ingrediant);
    list.appendChild(li);
    shrimp_info.ingrediantList.push(ingrediant);
}

let addInst = () => {
    let list = document.getElementById("inst");
    let li = document.createElement("li");
    let instruction = document.getElementById("newInst").value;
    li.appendChild(document.createTextNode(instruction));
    console.log(instruction);
    list.appendChild(li);
    shrimp_info.instructionList.push(instruction);
}