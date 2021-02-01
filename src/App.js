import './App.css';
import { API_KEY } from './config.js';
import Nav from './components/Nav';
import Learn from './components/Learn';
import About from './components/About';
import Breakfast from './components/Breakfast';
import Lunch from './components/MainCourse';
import Appetizer from './components/Appetizer';
import Salad from './components/Salad';
import Dessert from './components/Dessert';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';

import { useState } from 'react';

function App() {
	const [recipes, setRecipes] = useState([]);

	async function getRecipe(recipeType) {
		console.log('****get recipe fetch***');
		const response = await fetch(
			`https://api.spoonacular.com/recipes/search?diet=vegan&type=${recipeType}&apiKey=${API_KEY}`,
			{
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers':
						'Accept, Authorization,Accept-Language, Content-Language, Content-Type, Cache-Control, Origin, X-Requested-With',
				},
			}
		);
		const data = await response.json();
		setRecipes(data.results);
		console.log(data.results);

		// function clearRecipe() {
		// 	setRecipes([])
		// }

		// function clearRecipe()
		// call setRecipes([])
		// trigger with onClick
	}
	console.log(recipes);
	// console.log(summary, '*****app****');
	// useEffect(() => {
	// 	getRecipe();
	// }, []);

	return (
		<Router>
			<div className="App">
				<Nav />

				<Breakfast recipes={recipes} getRecipe={getRecipe} />
				<Lunch recipes={recipes} getRecipe={getRecipe} />
				<Appetizer recipes={recipes} getRecipe={getRecipe} />
				<Salad recipes={recipes} getRecipe={getRecipe} />
				<Dessert recipes={recipes} getRecipe={getRecipe} />
			</div>
		</Router>
	);
}

export default App;
