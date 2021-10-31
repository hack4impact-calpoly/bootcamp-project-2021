let addIngredient = () => {
    let ul = document.getElementById("ingredients");
    let random = document.createElement("li");
    let ingredint = document.getElementById("newIngredient").value;
    console.log(ingredint);
    random.appendChild(document.createTextNode(ingredint));
    ul.appendChild(random);
  }
  let addInstruction = () => {
    let ul = document.getElementById("instructions");
    let random = document.createElement("li");
    let ingredint = document.getElementById("newInstruction").value;
    console.log(ingredint);
    random.appendChild(document.createTextNode(ingredint));
    ul.appendChild(random);
  }