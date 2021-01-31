import React from 'react';
import Recipe from './Recipe';
import SearchButton from './SearchButton';

const Appetizer = ({ recipes, getRecipe }) => {
	return (
		<div className="recipes">
			<h1>Appetizers</h1>
			<SearchButton
				onClick={() => {
					getRecipe('appetizer');
				}}
				searchBtn="Get Appetizer Recipes"
			/>
			<Recipe recipes={recipes} />
		</div>
	);
};

export default Appetizer;
