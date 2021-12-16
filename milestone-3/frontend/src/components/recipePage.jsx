import React, { useState, useEffect } from 'react';
import './recipePage.css'
import IngredientsList from './ingredientsList';
import InstructionsList from './instructionsList';
import InputForm from './inputForm';
import { useParams } from 'react-router-dom';

export default function RecipePage() {

  // get recipe name from params
  const param = useParams();

  // initialize recipe state
  const [recipe, setRecipe] = useState(null);
  const [ingredientsList, setIngredients] = React.useState(null);
  const [ingredient, setIngredient] = React.useState('');
  const [instructionsList, setInstructions] = React.useState(null);
  const [instruction, setInstruction] = React.useState('');

  // import each recipe object based on the recipe name
  useEffect(() => {
    const getRecipe = async () => {
      let recipeHolder = await fetch(`http://localhost:3001/api/recipe/${param.name}`);
      let recipeData = await recipeHolder.json();
      setRecipe(recipeData);
      setIngredients(recipeData.ingredients)
      setInstructions(recipeData.instructions)
    }
    getRecipe();
  }, [param.name]);

  // issue: recipe is undefined

  function handleIngredientChange(event) {
    setIngredient(event.target.value);
  }

  function handleIngredientAdd() {
    const newIngredientsList = ingredientsList.concat(ingredient);
    setIngredients(newIngredientsList);
    setIngredient('');
  }

  function handleInstructionChange(event) {
    setInstruction(event.target.value);
  }

  function handleInstructionAdd() {
    const newInstructionsList = instructionsList.concat(instruction);
    setInstructions(newInstructionsList);
    setInstruction('');
  }

  return (
    <div>
      {recipe && instructionsList && ingredientsList ? (
        <div>
          {/* Introduction Section */}
          <div className='recipeDescription'>
              <div className='recipeText'>
                  <h1 className='title'>{recipe.recipeName}</h1>
                  <p>{recipe.description}</p>
              </div>
              <img className='recipeImage' src={recipe.imageSrc} alt='good-food' height='300' width='400'/>
          </div>
          {/* Ingredients Section */}
          <div className='ingredients'>
            <h1 className='header title'>Ingredients</h1>
            <h2 className='header contents'>Serving Size: {recipe.servingSize}</h2>
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
        ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}