import React from 'react';
import './recipePage.css'
import IngredientsList from './ingredientsList';
import InstructionsList from './instructionsList';
import InputForm from './inputForm';

export default function RecipePage({recipeName, recipeDesc, imageSrc, ingredients, servingSize, instructions}) {

  const [ingredientsList, addIngredient] = React.useState(ingredients);
  const [ingredient, setIngredient] = React.useState('');
  const [instructionsList, addInstruction] = React.useState(instructions);
  const [instruction, setInstruction] = React.useState('');

  function handleIngredientChange(event) {
    setIngredient(event.target.value);
  }

  function handleIngredientAdd() {
    const newIngredientsList = ingredientsList.concat(ingredient);
    addIngredient(newIngredientsList);
    setIngredient('');
  }

  function handleInstructionChange(event) {
    setInstruction(event.target.value);
  }

  function handleInstructionAdd() {
    const newInstructionsList = instructionsList.concat(instruction);
    addInstruction(newInstructionsList);
    setInstruction('');
  }

  return (
    <div>
        {/* Introduction Section */}
        <div className='recipeDescription'>
            <div className='recipeText'>
                <h1 className='title'>{recipeName}</h1>
                <p>{recipeDesc}</p>
            </div>
            <img className='recipeImage' src={imageSrc} alt='good-food' height='300' width='400'/>
        </div>
        {/* Ingredients Section */}
        <div className='ingredients'>
          <h1 className='header title'>Ingredients</h1>
          <h2 className='header contents'>Serving Size: {servingSize}</h2>
          <IngredientsList ingredients={ingredientsList} />
          {/* Ingredients Input Form Here */}
          <InputForm formType={"Ingredient"} newElement={ingredient} onChange={handleIngredientChange} onAdd={handleIngredientAdd} />
        </div>
        {/* Instruction Section */}
        <div class='ingredients'>
          <h1 class='header title'>Instructions</h1>
          <InstructionsList instructions={instructionsList} />
          {/* Instruction Input Form Here */}
          <InputForm formType={"Instruction"} newElement={instruction} onChange={handleInstructionChange} onAdd={handleInstructionAdd} />
        </div>
    </div>
  );
}