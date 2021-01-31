import React from 'react';
import Recipe from './Recipe';
import SearchButton from './SearchButton';

const Salad = ({ recipes, getRecipe }) => {
	return (
		<div className="recipes">
			<h1>Salads</h1>
			<SearchButton
				onClick={() => {
					getRecipe('salad');
				}}
				searchBtn="Get Salad Recipes"
			/>
			<Recipe recipes={recipes} />
		</div>
	);
};

export default Salad;
