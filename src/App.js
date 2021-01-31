import './App.css';
import { API_KEY } from './config.js';
import Recipe from './components/Recipe';
import Nav from './components/Nav';
import Learn from './components/Learn';
import About from './components/About';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';

import { useEffect, useState } from 'react';

function App() {
	const [recipes, setRecipes] = useState([]);

	async function getRecipe() {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/search?diet=vegan&type=breakfast&apiKey=${API_KEY}`,
			{
				headers: {
					Accept: 'application/json',
				},
			}
		);
		const data = await response.json();
		setRecipes(data.results);
	}
	console.log(recipes);
	useEffect(() => {
		getRecipe();
	}, []);

	return (
		<Router>
			<div className="App">
				<Nav />
				<Recipe recipes={recipes} />
			</div>
		</Router>
	);
}

export default App;
