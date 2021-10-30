let blt_info = {

    recipeName: "BLT",

    recipeDescription: "Speaking of an American classic. The BLT is the staple\nsandwhich of the USA. The L in BLT aactually stands for\nLiberty. I do not like to do anything fancy with this\n recipe. It is perfect the way it is.",

    recipeImage: "blt.jpg",

    ingrediantList: [
        "4 slices bacon ",
        "2 leaves lettuce ",
        "2 slices tomato",
        "2 slices bread, toasted",
        "1 tablespoon mayonnaise",
    ],

    instructionList: [
        "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling\n water, stirring occasionally until cooked trhough but form to the bite, 8 minues, Drain.Cook the bacon in a large, deep skillet over medium-high heat until evenly browned,\nabout 10 minutes. Drain the bacon slices on a paper towel-lined plate.",
        "Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper untilArrange the cooked bacon, lettuce, and tomato slices on one slice of bread. Spread\n one side of remaining bread slice with the mayonnaise. Bring the two pieces together\n to make a sandwich.",
    ]
}

let jsonify = () => {
    let space = document.getElementById("jsondiv");
    space.innerHTML = "<pre> " + JSON.stringify(blt_info, null, 10) + "</pre>";

}

let addIngr = () => {
    let list = document.getElementById("ingr");
    let li = document.createElement("li");
    let ingrediant = document.getElementById("newIngr").value;
    li.appendChild(document.createTextNode(ingrediant));
    console.log(ingrediant);
    list.appendChild(li);
    blt_info.ingrediantList.push(ingrediant);
}

let addInst = () => {
    let list = document.getElementById("inst");
    let li = document.createElement("li");
    let instruction = document.getElementById("newInst").value;
    li.appendChild(document.createTextNode(instruction));
    console.log(instruction);
    list.appendChild(li);
    blt_info.instructionList.push(instruction);
}