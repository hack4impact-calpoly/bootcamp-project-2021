// import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Overview from './Overview/Overview';
import Ingredients from './Ingredients/Ingredients';
import IngredientForm from './IngredientForm/IngredientForm';
import Preparation from './Preparation/Preparation';
import PreparationForm from './PreparationForm/PreparationForm';

export default function RecipePage() {
  const [thisRecipe, setRecipe] = useState();
  const [newIngredient, setNewIngredient] = useState(''); 
  const [ingredientList, addNewIngredient] = useState([]);
  const [newInstruction, setNewInstruction] = React.useState(''); 
  const [insertPos, setInsertPos] = React.useState(''); 
  const [instructionList, addNewInstruction] = React.useState([]); 

  // -------- overview --------
  const rName = useLocation().pathname;
  useEffect(() => {
    const loadRecipes = async () => {
      await fetch(`http://localhost:3001/api/recipe${rName}`)
      .then(res => res.json())
      .then(data => setRecipe(data))
      .catch(error => console.log(error))
    };
    loadRecipes();
  }, [rName]);

  // -------- form setup (ingredients) --------
  function onClickIng() {
    let newList = ingredientList.concat(newIngredient);
    addNewIngredient(newList);
  }

  useEffect(() => {
    const updateIngList = async () => {
      if (newIngredient !== "") {
        const init = {
          method: 'PUT',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({newIngredient: newIngredient})
        };
        await fetch(`http://localhost:3001/api/recipe${rName}/ingredient`, init)
        .then(res => res.json())
        .then(data => setRecipe(data))
        .catch(error => console.log(error))
      }
    };
    updateIngList();
  }, [ingredientList]);

  // console.log(ingredientList);

  // -------- form setup (instructions) --------
  function onClickInst() {
    let newList = [
      ...instructionList.slice(0, parseInt(insertPos)-1),
      newInstruction,
      ...instructionList.slice(parseInt(insertPos)-1),
    ]
    addNewInstruction(newList);
  }

  useEffect(() => {
    const updateInstList = async () => {
      if (newInstruction !== "") {
        const init = {
          method: 'PUT',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(
            {
              newInstruction: newInstruction,
              insertPosition: insertPos
            }
          )
        };
        await fetch(`http://localhost:3001/api/recipe${rName}/instruction`, init)
        .then(res => res.json())
        .then(data => setRecipe(data))
        .catch(error => console.log(error))
      }
    };
    updateInstList();
  }, [instructionList]);

  return ( 
    <div>     
      <Overview recipe={thisRecipe}/><hr/>
      
      {/* -------- ingredients section -------- */}
      <Ingredients recipe={thisRecipe}/>
      <IngredientForm 
        newElement={newIngredient}
        onClick={onClickIng}
        onChange={(e) => {setNewIngredient(e.target.value)}}
      /><hr/>

      {/* -------- instructions section -------- */}
      <Preparation recipe={thisRecipe}/>
      <PreparationForm
        newStep={newInstruction}
        insertPosition={insertPos}
        onClickInst={onClickInst}
        onChangeStep={(e) => {setNewInstruction(e.target.value)}}
        onChangePos={(e) => {setInsertPos(e.target.value)}}
      />
    </div>
  );
}
