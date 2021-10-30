// preparation

let addInst = () => {
    let ingList = document.getElementById("instructionList");
    let newIng = document.createElement("li");
    let inputIng = document.getElementById("newInstruction").value;
    newIng.appendChild(document.createTextNode(inputIng));
    let ingListLen = document.getElementById("instructionList").getElementsByTagName("li");
    // let ingListLen = document.querySelectorAll("#instructionList li").length;
    console.log("document.querySelectorAll" + document.querySelectorAll("#instructionList li"));

    let inputPos = document.getElementById("addPosition").value;
    // console.log("ingList: " + ingList);
    // console.log("ingList length: " + ingListLen);
    if (inputPos > 0 && inputPos <= (ingListLen + 1)) {
        console.log("ingListLen: " + ingListLen);
        if (inputPos == 1) {
            ingList.insertBefore(newIng, ingList.childNodes[inputPos]);
        }
        else if (inputPos < ingListLen) {
            console.log("in here 2");
            ingList.insertBefore(newIng, ingList.childNodes[inputPos - 1].nextSibling);
        }
        else if (inputPos == ingListLen) {
            console.log("in here 3");
            ingList.insertBefore(newIng, ingList.childNodes[inputPos].nextSibling);
        }
        else if (inputPos == ingListLen + 1) {
            console.log("in here 3");
            ingList.insertBefore(newIng, ingList.childNodes[inputPos].nextSibling.nextSibling);
        }
        ingListLen++
    }
    console.log("ingListLen: " + ingListLen);
}

let deleteInst = () => {
    let ingList = document.getElementById("instructionList");
    let inputIng = document.getElementById("deleteInstruction").value;

    // minus 1 to offset index
    ingList.removeChild(ingList.children[inputIng - 1]);
}

let convertToJSON = () => {
    let name = document.getElementById("recipeName").innerHTML;
    let description = document.getElementById("recipeDescription").innerHTML;
    let image = document.getElementById("recipeImage").src;

    // ingredients
    let ingList = document.getElementById("ingredientList").getElementsByTagName("li");
    let ingredients = [];
    for (let i = 0; i < ingList.length; i++) {
        ingredients.push(ingList[i].innerHTML);
    }

    // instructions
    let instList = document.getElementById("instructionList").getElementsByTagName("li");
    console.log(instList);
    let instructions = [];
    for (let i = 0; i < instList.length; i++) {
        console.log(instList[i].innerHTML);
        instructions.push(instList[i].innerHTML);
    }

    let recipeInfo = {
        recipeName: name,
        recipeDescription: description,
        recipeImage: image,
        ingredientList: ingredients,
        instructionList: instructions
    };
    let outerDiv = document.getElementById("overview");
    let convertedText = document.getElementById("convertedText");
    convertedText.innerHTML = JSON.stringify(recipeInfo);
    outerDiv.appendChild(convertedText);
}
