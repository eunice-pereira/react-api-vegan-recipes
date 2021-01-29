import React from 'react';

const Recipe = ({ title, image }) => {
	return (
		<div>
			<h1>Title: {title}</h1>
			<img src={image} alt="" width="300px"></img>
			<p>Summary</p>
			<p>Ingredients</p>
			<p>Instructions</p>
		</div>
	);
};

export default Recipe;
