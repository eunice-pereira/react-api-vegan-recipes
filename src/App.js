import './App.css';
import { API_KEY } from './config.js';
import Recipe from './components/Recipe';
import Header from './components/Header';

import { useEffect, useState } from 'react';

function App() {
	const [recipes, setRecipes] = useState([]);

	async function getRecipe() {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/search?diet=vegan&number=10&apiKey=${API_KEY}`,
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
		<div className="App">
			<Header />
			<Recipe recipes={recipes} />
		</div>
	);
}

export default App;
