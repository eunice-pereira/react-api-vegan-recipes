import React from 'react';

const Nav = ({ clearRecipe }) => {
	return (
		<div>
			<h1>Plant Powered 🌱</h1>
			<button onClick={clearRecipe}>clear recipes</button>
		</div>
	);
};

export default Nav;
