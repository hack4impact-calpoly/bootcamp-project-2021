import React from "react";

//not sure whether it was necessary to abstract the input fields as a component but I figured it couldn't hurt
export default function RecipeInput({
  name, //the name of the list being added to, ie. Instructions
  onChange, //function that updates the newValue as characters are entered into the text field
  adder, //function that adds the input to the list
  newValue, //this is the value where the data from the text field is stored
  placeholder, //the unique text that is shown in the text field prior to any input
}) {
  return (
    <div>
      <input
        id="newIngredient"
        className="form-element"
        placeholder={placeholder}
        value={newValue}
        onChange={onChange}
      />
      <button onClick={adder}>Add {name} to the recipe</button>
    </div>
  );
}
