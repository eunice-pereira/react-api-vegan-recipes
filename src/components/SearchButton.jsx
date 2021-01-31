import React from 'react';

const SearchButton = ({ onClick, searchBtn }) => {
	return (
		<button className="search-button" onClick={onClick}>
			{searchBtn}
		</button>
	);
};

export default SearchButton;
