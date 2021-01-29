import './App.css';
import Recipe from './components/Recipe';
import { API_KEY } from './config.js';

import { useState, useEffect } from 'react';

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
			<h1>Hello!</h1>
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			{recipes.length &&
				recipes.map((recipe) => (
					<Recipe
						key={recipe.id}
						title={recipe.title}
						image={`https://spoonacular.com/recipeImages/${recipe.image}`}
					/>
				))}
		</div>
	);
}

export default App;
