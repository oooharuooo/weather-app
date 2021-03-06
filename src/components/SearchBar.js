import React, { useState } from "react";

import { Button,Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocationCityIcon from "@material-ui/icons/LocationCity";

const SearchBar = ({ setQuery }) => {
    const [searchTerm, setSearchTerm] = useState("");
	const searchHandler = (e) => {
		e.preventDefault();
		setQuery(searchTerm);
		setSearchTerm("");
	};

	return (
		<Box>
			<form onSubmit={searchHandler}>
				<Box display="flex" justifyContent="center">
					<TextField
						id="filled-basic"
						label="Location"
						variant="outlined"
						color="secondary"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LocationCityIcon color="action" />
								</InputAdornment>
							),
						}}
						name="searchTerm"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<Button color="primary" variant="contained" onClick={searchHandler}>
						Search
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default SearchBar;
