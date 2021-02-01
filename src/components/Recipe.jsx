import React from 'react';
import RecipeCard from './RecipeCard';
import { API_KEY } from '../config.js';
import { useState, useEffect } from 'react';

// Recipe is parent component to RecipeCard

const Recipe = ({ recipes }) => {
	// const [summary, setSummary] = useState([]);
	console.log(recipes);
	const getSummary = async (id) => {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`,
			{
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Headers':
						'Accept, Authorization, Accept-Language, Content-Language, Content-Type, Cache-Control, Origin, X-Requested-With',
				},
			}
		);
		const data = await response.json();
		console.log(data, '***summary data');
		// setSummary(data.summary);
		return data;
	};
	// let summary;
	// useEffect(() => {
	// 	if (recipes.length) summary = getSummary(recipes[0].id);
	// }, [recipes]);

	// if (recipes.length) summary = getSummary(recipes[0].id);
	// console.log(summary, '****Recipe***');
	return (
		<div className="recipe-info">
			{/* {recipes.length && (
				<RecipeCard
					key={recipes[0].id}
					title={recipes[0].title}
					image={`https://spoonacular.com/recipeImages/${recipes[0].image}`}
					prepTime={recipes[0].readyInMinutes}
					id={recipes[0].id}
					summary={summary}
				/>
			)} */}
			{recipes &&
				recipes.map((recipe) => {
					let summary = getSummary(recipe.id);
					return (
						<RecipeCard
							key={recipe.id}
							title={recipe.title}
							image={`https://spoonacular.com/recipeImages/${recipe.image}`}
							prepTime={recipe.readyInMinutes}
							id={recipe.id}
							summary={summary}
						/>
					);
				})}
		</div>
	);
};

export default Recipe;
