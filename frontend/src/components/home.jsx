import React, { useState, useEffect } from 'react';
import './home.css';
import RecipePreview from './recipePreview.jsx';

export default function Home() {
	const [search, setSearch] = useState('');
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch(`/api/recipe/${search}`)
			.then((res) => res.json())
			.then((data) => {
				setRecipes(data);
			})
			.catch((err) => console.log(err));
	}, [search]);
	return (
		<main>
			<div className='TopBar'>
				<h1>Welcome to Hu's Chews!</h1>
				<input
					type='text'
					id='search'
					placeholder='Search'
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</div>
			<p className='Welcome'>
				Welcome to my website! Almost every day, whether it was after
				school, swim practice, or music lessons, I would come home to my
				mom cooking a delicious traditional Chinese meal. Here are some
				of my favorite recipes that she cooks for us. Enjoy!
			</p>
			{recipes.length !== 0 ? (
				recipes.map((recipe) => {
					return <RecipePreview recipe={recipe} />;
				})
			) : (
				<div><p className='Message'>No recipes found</p></div>
			)}
		</main>
	);
}
