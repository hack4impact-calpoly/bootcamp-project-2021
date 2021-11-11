import React from 'react';
import Overview from './Overview/Overview';
import Ingredients from './Ingredients/Ingredients';
import Preparation from './Preparation/Preparation';
import recipes from '../../../src/recipeData.js';
import { useParams } from 'react-router';

export default function RecipePage() {
  const {recipeId} = useParams()
  const thisRecipe = recipes.find(recipe => recipe.recipeLink === recipeId) 
 
  return (
    <div>
      <Overview 
        image={thisRecipe.recipeImage}
        name={thisRecipe.recipeName}
        source={'[Recipe from ' + thisRecipe.recipeSource + ']'}
        link={thisRecipe.recipeLink}
        description={thisRecipe.recipeDescription}
      /> 
      <Ingredients
        ingredients={thisRecipe.ingredientList}
      />
      <Preparation
        instructions={thisRecipe.instructionList}
      />
    </div>
  );
}
