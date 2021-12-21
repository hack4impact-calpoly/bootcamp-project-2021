import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './recipe.css';

export default function Recipe(props) {
	// new ingredient and instruction states
	const [newValue, setNewValue] = useState({
		ingredients: '',
		instructions: ''
	});

	// new position states
	const [newPos, setNewPos] = useState({
		ingredients: props.recipe.ingredients.length,
		instructions: props.recipe.instructions.length
	});

	// add ingredient or instruction
	const addValue = (type) => {
		if (newValue[type].trim().length !== 0) {
			// send PUT request
			fetch(`/api/recipe/${props.recipe.name}/${type}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					value: newValue[type],
					position: newPos[type]
				})
			})
				.then(() => {
					// send GET request to update parent recipes state
					fetch(`/api/recipe`)
						.then((res) => res.json())
						.then((data) => props.setRecipes(data))
						.catch((err) => console.log(err));
					// update value and position states
					setNewValue({
						...newValue,
						[type]: ''
					});
					setNewPos({
						...newPos,
						[type]: props.recipe[type].length + 1
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	// delete ingredient or instruction
	const deleteValue = (type, index) => {
		if (window.confirm('Are you sure you want to remove this?')) {
			// send DELETE request
			fetch(`/api/recipe/${props.recipe.name}/${type}/${index}`, {
				method: 'DELETE'
			}).catch((err) => {
				console.log(err);
			});
		}
	};

	// delete recipe
	const history = useHistory();
	const deleteRecipe = () => {
		if (window.confirm('Are you sure you want to remove this recipe?')) {
			// send DELETE request
			fetch(`/api/recipe/${props.recipe.name}`, {
				method: 'DELETE'
			})
				.then(() => history.push('/'))
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<main>
			<div className='FlexContainer'>
				<div>
					<img
						className='FlexImage'
						src={props.recipe.imageURL}
						alt={props.recipe.description}
					/>
				</div>
				<div className='FlexContent'>
					<h1>{props.recipe.name}</h1>
					<p>{props.recipe.description}</p>
					<h2>Ingredients</h2>
					<ul>
						{props.recipe.ingredients.map((ingredient, index) => {
							return (
								<li
									key={index}
									onClick={() =>
										deleteValue('ingredients', index)
									}
								>
									{ingredient}
								</li>
							);
						})}
					</ul>
					<div className='FormGroup'>
						<h3>Add an Ingredient</h3>
						<label htmlFor='newIngredient'>Ingredient: </label>
						<input
							className='FormInput'
							type='text'
							id='newIngredient'
							placeholder='2 cups of spinach'
							value={newValue.ingredients}
							onChange={(e) => {
								setNewValue({
									...newValue,
									ingredients: e.target.value
								});
							}}
						/>
						<label htmlFor='ingredientPos'>{`Position (0-${props.recipe.ingredients.length}): `}</label>
						<input
							style={{ width: '100px' }}
							className='FormInput'
							type='number'
							id='ingredientPos'
							placeholder='0'
							min='0'
							max={props.recipe.ingredients.length}
							value={newPos.ingredients}
							onChange={(e) => {
								setNewPos({
									...newPos,
									ingredients: e.target.value
								});
							}}
						/>
						<br />
						<button
							className='FormButton'
							onClick={() => addValue('ingredients')}
						>
							Add Ingredient
						</button>
					</div>
				</div>
			</div>
			<h2>Preparation</h2>
			<ol id='instructions'>
				{props.recipe.instructions.map((instruction, index) => {
					return (
						<li
							key={index}
							onClick={() => deleteValue('instructions', index)}
						>
							{instruction}
						</li>
					);
				})}
			</ol>
			<div className='FormGroup'>
				<h3>Add an Instruction</h3>
				<label htmlFor='newInstruction'>Instruction: </label>
				<input
					className='FormInput'
					type='text'
					id='newInstruction'
					placeholder='Pour and Serve!'
					value={newValue.instructions}
					onChange={(e) => {
						setNewValue({
							...newValue,
							instructions: e.target.value
						});
					}}
				/>
				<label htmlFor='instructionPos'>{`Position (0-${props.recipe.instructions.length}): `}</label>
				<input
					style={{ width: '100px' }}
					className='FormInput'
					type='number'
					id='instructionPos'
					placeholder='0'
					min='0'
					max={props.recipe.instructions.length}
					value={newPos.instructions}
					onChange={(e) => {
						setNewPos({
							...newPos,
							instructions: e.target.value
						});
					}}
				/>
				<br />
				<button
					className='FormButton'
					onClick={() => addValue('instructions')}
				>
					Add Instruction
				</button>
			</div>
			<div className='Center'>
				<button className='FormButton' onClick={deleteRecipe}>
					Delete Recipe
				</button>
			</div>
		</main>
	);
}
