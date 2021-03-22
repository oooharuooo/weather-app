import React from "react";

import { Button, Switch,Box } from "@material-ui/core";

import Brightness4Icon from "@material-ui/icons/Brightness4";

const DarkMode = ({ darkState, setDarkState }) => {
	const handleThemeChange = () => {
		setDarkState(!darkState);
	};

	return (
		<Box>
			<Button
				variant="contained"
				style={{
					background: "linear-gradient(to right, #f3e0e0 40%, #423d3d 50%)",
					maxHeight: "40px",
				}}
			>
				<Switch checked={darkState} onChange={handleThemeChange} />
				<Brightness4Icon fontSize="default" style={{ color: "white" }} />
			</Button>
		</Box>
	);
};

export default DarkMode;
