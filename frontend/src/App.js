import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import NewRecipe from './components/newRecipe.jsx';
import About from './components/about.jsx';
import Recipe from './components/recipe.jsx';
import { useState, useEffect } from 'react';

function App() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch('/api/recipe')
			.then((res) => res.json())
			.then((data) => setRecipes(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/new' component={NewRecipe} />
					<Route path='/about' component={About} />
					{recipes.map((recipe) => {
						return (
							<Route path={`/recipes/${recipe.name}`}>
								<Recipe
									recipe={recipe}
									setRecipes={setRecipes}
								/>
							</Route>
						);
					})}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
