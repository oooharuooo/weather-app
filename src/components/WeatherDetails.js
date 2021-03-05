import React from "react";

import KtoFConverter from "../helper/KtoFConverter";

import { Box, Typography, Paper } from "@material-ui/core/";

const iconURL = "http://openweathermap.org/img/wn/";

const WeatherDetails = ({ details }) => {
	const { city, country, weather, temp, icon } = details;

	return (
		<Paper elevation={3} style={{ height: "35vh" }}>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				height="100%"
				justifyContent="space-evenly"
			>
				<Typography variant="h4" color="primary">
					{city},{country}
				</Typography>
				<Typography variant="h5" color="primary">
					{KtoFConverter(temp)}°F
				</Typography>

				<img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weatherIcon" />
			</Box>
		</Paper>
	);
};

export default WeatherDetails;
