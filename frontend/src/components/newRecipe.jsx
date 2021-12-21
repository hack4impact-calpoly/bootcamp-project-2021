import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './newRecipe.css';

export default function NewRecipe() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm();

	// verify that the URL is accessible
	const verifyImageURL = (url) => {
		return new Promise(function (resolve, reject) {
			let timer,
				img = new Image();
			// cannot load image
			img.onerror = img.onabort = function () {
				clearTimeout(timer);
				reject();
			};
			// can load image
			img.onload = function () {
				clearTimeout(timer);
				resolve();
			};
			// reject promise and set invalid URL on timeout
			timer = setTimeout(() => {
				img.src = '//!!!!/test.jpg';
				reject();
			}, 5000);
			img.src = url;
		});
	};

	// form submission
	const history = useHistory();
	const onSubmit = (data) => {
		verifyImageURL(data.imageURL.trim())
			.then(() => {
				// send POST request to create recipe
				fetch('/api/recipe', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name: data.name.trim(),
						description: data.description.trim(),
						imageURL: data.imageURL.trim(),
						ingredients: [],
						instructions: []
					})
				})
					.then((res) => res.text())
					.then((data) => {
						// unsuccessful POST request
						if (data === 'Error creating recipe') {
							setError('create');
						} else {
							history.push('/');
							window.location.reload();
						}
					})
					.catch(() => {
						setError('create');
					});
			})
			// invalid image URL
			.catch(() => {
				setError('imageURL');
			});
	};

	return (
		<main>
			<h1>Create New Recipe</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='FormRow'>
					<label for='name'>Name:</label>
					<input
						id='name'
						{...register('name', { required: true })}
					/>
					{errors.name && <span>Please enter a name</span>}
				</div>
				<div className='FormRow'>
					<label for='description'>Description:</label>
					<textarea
						id='description'
						{...register('description', { required: true })}
					/>
					{errors.description && (
						<span>Please enter a description</span>
					)}
				</div>
				<div className='FormRow'>
					<label for='imageURL'>Image URL:</label>
					<input
						id='imageURL'
						{...register('imageURL', { required: true })}
					/>
					{errors.imageURL && (
						<span>Please enter a valid image URL</span>
					)}
				</div>
				<button type='submit' className='FormButton'>
					Create
				</button>
				<br />
				{errors.create && <span>Unable to create recipe</span>}
			</form>
		</main>
	);
}
