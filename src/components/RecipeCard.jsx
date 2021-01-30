import React from 'react';

const RecipeCard = ({ title, image, prepTime }) => {
	return (
		<div>
			<h1>{title}</h1>
			<img src={image} alt="" width="400px"></img>
			<p>Ready In Minutes: {prepTime}</p>
			<br />
		</div>
	);
};

export default RecipeCard;
