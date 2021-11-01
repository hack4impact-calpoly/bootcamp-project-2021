
function addIngredient() {
    var ul = document.getElementById("igList");
    var li = document.createElement("li");
    var ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
  }
  
  function addInstruction() {
    var ol = document.getElementById("prep");
    var li = document.createElement("li");
    var ingredient = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(ingredient));
    ol.appendChild(li);
  }