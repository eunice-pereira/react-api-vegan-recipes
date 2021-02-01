import React from 'react';
import Recipe from './Recipe';
import SearchButton from './SearchButton';

const Breakfast = ({ recipes, getRecipe }) => {
	// console.log(summary, '***Breakfast****');
	return (
		<div className="recipes">
			<h1>Breakfast</h1>
			<SearchButton
				onClick={() => {
					getRecipe('breakfast');
				}}
				searchBtn="Get Breakfast Recipes"
			/>
			<Recipe recipes={recipes} />
		</div>
	);
};

export default Breakfast;
