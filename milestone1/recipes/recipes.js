let recipe_info = {}

function conv_to_JSON() {
    recipe_info.recipe_name = document.getElementById('recipe_name').innerHTML;
    recipe_info.recipe_credit = document.getElementById('recipe_credit').innerHTML;
    recipe_info.recipe_time = document.getElementById('recipe_time').innerHTML;
    recipe_info.recipe_image = document.getElementById('recipe_image').src;

    // get each ingredient
    var ingredient_list = []
    var liTags = document.getElementById('ingredient_list').getElementsByTagName('li');
    for (var key of Object.keys(liTags)) {
        ingredient_list.push(liTags[key].innerHTML);
    }
    recipe_info.ingredient_list = ingredient_list;


    //get each instruction
    var instruction_list = []
    var liTags = document.getElementById('instruction_list').getElementsByTagName('li');
    for (var key of Object.keys(liTags)) {
        instruction_list.push(liTags[key].innerHTML);
    }
    recipe_info.steps = instruction_list;

    output_JSON(recipe_info);
}

function output_JSON(recipe_info) {
    document.getElementById("json").textContent = JSON.stringify(recipe_info, undefined, 2);
    document.getElementById("pre-formatter").style.padding = "16px 0px";
    document.getElementById("pre-formatter").style.borderBottom = "4px solid black";
    document.getElementById("pre-formatter").style.borderTop = "4px solid black";
}


function add_ingredient() {
    var ul = document.getElementById("ingredient_list");
    var li = document.createElement("li");
    var ingredient = document.getElementById("new_ingredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}

function add_instruction() {
    var ol = document.getElementById("instruction_list");
    var li = document.createElement("li");
    var ingredient = document.getElementById("new_instruction").value;
    li.appendChild(document.createTextNode(ingredient));
    ol.appendChild(li);
}