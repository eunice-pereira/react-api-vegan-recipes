import React from 'react';
import RecipeCard from './RecipeCard';

// Recipe is parent component to RecipeCard

const Recipe = ({ recipes }) => {
	return (
		<div className="recipe-info">
			{recipes.map((recipe) => (
				<RecipeCard
					key={recipe.id}
					title={recipe.title}
					image={`https://spoonacular.com/recipeImages/${recipe.image}`}
					prepTime={recipe.readyInMinutes}
					id={recipe.id}
				/>
			))}
		</div>
	);
};

export default Recipe;
