import React from 'react';

const RecipeCard = ({ title, image, prepTime }) => {
	return (
		<div
			className="recipe-card"
			onClick={() => {
				// to click card and take user to recipe instructions url
				// useHistory hook
				// history.push(url to details, passing in id)
			}}
		>
			<h1 className="recipe-title">{title}</h1>
			<img src={image} alt="" width="400px"></img>
			<h3>Ready In Minutes: {prepTime}</h3>
			<br />
		</div>
	);
};

export default RecipeCard;
