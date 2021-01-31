import React from 'react';
import Recipe from './Recipe';
import SearchButton from './SearchButton';

const MainCourse = ({ recipes, getRecipe }) => {
	return (
		<div className="recipes">
			<h1>Main Course</h1>
			<SearchButton
				onClick={() => {
					getRecipe('lunch');
				}}
				searchBtn="Get Main Course Recipes"
			/>
			<Recipe recipes={recipes} />
		</div>
	);
};

export default MainCourse;
