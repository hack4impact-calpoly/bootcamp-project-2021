import React from 'react';
import Overview from './Overview/Overview';
import Ingredients from './Ingredients/Ingredients';
import Preparation from './Preparation/Preparation';
import recipes from '../../../src/recipeData.js';
import { useParams } from 'react-router';
import IngredientForm from './IngredientForm/IngredientForm';
import PreparationForm from './PreparationForm/PreparationForm';

export default function RecipePage() {
  // -------- navigation setup --------
  const {recipeId} = useParams()
  const thisRecipe = recipes.find(recipe => recipe.recipeLink === recipeId) 

  // -------- form setup (ingredients) --------
  const [newIngredient, setNewIngredient] = React.useState(''); 
  const [ingredientList, addNewIngredient] = React.useState(thisRecipe.ingredientList);

  function onChangeIng(e) {
    setNewIngredient(e.target.value);
  }

  function onClickIng() {
    var newList = ingredientList.concat(newIngredient);
    addNewIngredient(newList);
  }

  // -------- form setup (instructions) --------
  const [newInstruction, setNewInstruction] = React.useState(''); 
  const [insertPos, setInsertPos] = React.useState(''); 
  const [instructionList, addNewInstruction] = React.useState(thisRecipe.instructionList); 

  function onChangeStep(e) {
    setNewInstruction(e.target.value);
  }

  function onChangePos(e) {
    setInsertPos(e.target.value);
  }

  function onClickInst() {
    var newList = [
      ...instructionList.slice(0, insertPos-1),
      newInstruction,
      ...instructionList.slice(insertPos-1),
    ]
    addNewInstruction(newList);
  }

  return (
    <div>
      <Overview 
        image={thisRecipe.recipeImage}
        name={thisRecipe.recipeName}
        source={'[Recipe from ' + thisRecipe.recipeSource + ']'}
        link={thisRecipe.recipeLink}
        description={thisRecipe.recipeDescription}
      /> 
      
      {/* -------- ingredients section -------- */}
      <Ingredients
        ingredients={ingredientList}
      />
      <IngredientForm
        newElement={newIngredient}
        onChange={onChangeIng}
        onClick={onClickIng}
      />

      {/* -------- instructions section -------- */}
      <Preparation
        instructions={instructionList}
      />
      <PreparationForm
        newStep={newInstruction}
        onChangeStep={onChangeStep}
        insertPosition={insertPos}
        onChangePos={onChangePos}
        onClickInst={onClickInst}
      />
    </div>
  );
}
