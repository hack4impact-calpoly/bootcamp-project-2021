let my_object = {

    recipeName: "",

    recipeDescription:"",

    recipeImage: "",

    ingrediantList: [],

    instructionList: []
}

let jsonify = () => {

    let space = document.getElementById("jsondiv");


    //get name
    let name = document.getElementById("name");
    console.log(name.innerHTML);
    my_object.recipeName = name.innerHTML;

    //get description
    let description = document.getElementById("description");
    console.log(description.innerHTML);
    my_object.recipeDescription = description.innerHTML;

    //get image
    let image = document.getElementById("rec_img").src
    console.log(image);
    my_object.recipeImage = image;



    //get the ingrediants
    let ingrlist = document.getElementById("ingr");
    let ingrchildren = ingrlist.children;
    for(let i = 0; i < ingrchildren.length; i++){
        console.log(ingrchildren[i].innerHTML);
        if(!my_object.ingrediantList.includes(ingrchildren[i].innerHTML)){
            my_object.ingrediantList.push(ingrchildren[i].innerHTML);
        }
    }

    //get the instructions
    let instlist = document.getElementById("inst");
    let instchildren = instlist.children;
    for(let j = 0; j < instchildren.length; j++){
        console.log(instchildren[j].innerHTML);
        if(!my_object.instructionList.includes(instchildren[j].innerHTML)){
            my_object.instructionList.push(instchildren[j].innerHTML);
        }
    }

    space.innerHTML = "<pre> " + JSON.stringify(my_object, null, 10) + "</pre>";

}

let addIngr = () => {
    let list = document.getElementById("ingr");
    let li = document.createElement("li");
    let ingrediant = document.getElementById("newIngr").value;
    li.appendChild(document.createTextNode(ingrediant));
    console.log(ingrediant);
    list.appendChild(li);
    my_object.ingrediantList.push(ingrediant);
}

let addInst = () => {
    let list = document.getElementById("inst");
    let li = document.createElement("li");
    let instruction = document.getElementById("newInst").value;
    li.appendChild(document.createTextNode(instruction));
    console.log(instruction);
    list.appendChild(li);
    my_object.instructionList.push(instruction);
}

