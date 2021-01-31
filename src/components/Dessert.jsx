import React from 'react';
import Recipe from './Recipe';
import SearchButton from './SearchButton';

const Dessert = ({ recipes, getRecipe }) => {
	return (
		<div className="recipes">
			<h1>Desserts</h1>
			<SearchButton
				onClick={() => {
					getRecipe('dessert');
				}}
				searchBtn="Get Dessert Recipes"
			/>
			<Recipe recipes={recipes} />
		</div>
	);
};

export default Dessert;
