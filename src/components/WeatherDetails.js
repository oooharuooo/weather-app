import React from "react";

import KtoFConverter from "../helper/KtoFConverter";

import { Box, Typography, Paper } from "@material-ui/core/";


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
					{KtoFConverter(temp)}°F { weather}
				</Typography>

				<img
					src={`http://openweathermap.org/img/wn/${icon}.png`}
					alt="weatherIcon"
					style={{ backgroundColor: "#f4709b",borderRadius: "25px"}}
				/>
			</Box>
		</Paper>
	);
};

export default WeatherDetails;
