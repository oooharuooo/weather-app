import React, { useState } from "react";

const SearchBar = ({ setQuery }) => {
    const [searchTerm, setSearchTerm] = useState("");
	const searchHandler = (e) => {
		setQuery(searchTerm);
		setSearchTerm("");
	};

	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					placeholder="Input Location"
					name="searchTerm"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button type="submit" onClick={searchHandler}>
					Search Location
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
