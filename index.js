// preparation

let addInst = () => {
    let ingList = document.getElementById("instructionList");
    let newIng = document.createElement("li");
    let inputIng = document.getElementById("newInstruction").value;
    newIng.appendChild(document.createTextNode(inputIng));
    let ingListLen = document.getElementById("instructionList").getElementsByTagName("li").length;
    let inputPos = document.getElementById("addPosition").value;

    console.log("before, ingList length: " + ingListLen);

    if (inputPos > 0 && inputPos <= (ingListLen + 1)) {
        // beginning
        if (inputPos == 1) {
            console.log("in here 1");
            ingList.insertBefore(newIng, ingList.childNodes[inputPos]);
        }
        // expand list
        else if (inputPos == ingListLen + 1) {
            console.log("in here 2");
            ingList.appendChild(newIng);
        }
        // last item
        else if (inputPos == ingListLen) {
            console.log("in here 3");
            ingList.insertBefore(newIng, ingList.childNodes[inputPos].nextSibling.nextSibling);
        }
        // somewhere in the middle
        else {
            console.log("in here 4");
            ingList.insertBefore(newIng, ingList.childNodes[inputPos - 1].nextSibling.nextSibling);
        }
        ingListLen++
    }
    // console.log("ingListLen: " + ingListLen);

    console.log("after, ingList length: " + ingListLen);
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
