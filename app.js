let carInfo = {
    carName: document.getElementById("Car_Name"),
    briefDescription: document.getElementById("Brief_Description"),
    vehicleImage: document.getElementById("Vehicle_Picture"),
    carSpecs: [
      document.getElementById("Car_Specs")
    ],
    carFacts: [
      document.getElementById("Car_Facts")
    ]
  }

let displayJSON = () => {
  document.body.innerHTML = JSON.stringify(carInfo);
}


let addCarSpec = () => {
  let value = document.getElementById("Car_Specs");
  let random = document.createElement("li");
  let newValue = document.getElementById("newCarSpec").value;
  random.appendChild(document.createTextNode(newValue));
  value.appendChild(random);
}
// this car spec function is meant to take in a new value typed in html and display. I am using the demo method for reference...is that ok? It is similar to what I want to do, or do I need
//to recode a different way?

let addCarFact = () => {
  let value = document.getElementById("Car_Facts");
  let random = document.createElement("ul"); //how do I add it as a numbered list?
  let newValue = document.getElementById("newCarFact").value;
  random.appendChild(document.createTextNode(newValue));
  value.appendChild(random);
}
// this car spec function is meant to take in a new value typed in html and display. I am using the demo method for reference...is that ok? It is similar to what I want to do, or do I need
//to recode a different way?