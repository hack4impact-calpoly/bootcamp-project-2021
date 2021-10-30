let mac_info = {

    recipeName: "Mac and Cheese",

    recipeDescription: "Here is my take on a American Classic. It is the perfect dish to\ngo with any entre.Heck, it can even serve as its own entre.\nThere are many different ways to make Mac and Cheese.\nI like the make it the traditional way, which is what\nmy grandmother taught me. This recipe has been passed\ndown for generations in my family ever since the Civil War.",

    recipeImage: "mac and cheese.jpg",

    ingrediantList: [
        "1 (8 ounce) box elbow macaroni",
        "1/4 cup butter",
        "1/4 cup all-purpose flour",
        "1/2 teaspoon salt",
        "gound black pepper to taste",
        "2 cups milk",
        "2 cups shredded Cheddar cheese"
    ],

    instructionList: [
        "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling\n water, stirring occasionally until cooked trhough but form to the bite, 8 minues, Drain.",
        "Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper until\n smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while\n continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add \n Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes.",
        "Fold macaroni into cheese sauce until coated."
    ]
}

let jsonify = () => {
    let space = document.getElementById("jsondiv");
    space.innerHTML = "<pre> " + JSON.stringify(mac_info, null, 10) + "</pre>";

}

let addIngr = () => {
    let list = document.getElementById("ingr");
    let li = document.createElement("li");
    let ingrediant = document.getElementById("newIngr").value;
    li.appendChild(document.createTextNode(ingrediant));
    console.log(ingrediant);
    list.appendChild(li);
    mac_info.ingrediantList.push(ingrediant);
}

let addInst = () => {
    let list = document.getElementById("inst");
    let li = document.createElement("li");
    let instruction = document.getElementById("newInst").value;
    li.appendChild(document.createTextNode(instruction));
    console.log(instruction);
    list.appendChild(li);
    mac_info.instructionList.push(instruction);
}

