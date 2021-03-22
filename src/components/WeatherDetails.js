import React from "react";

import KtoFConverter from "../helper/KtoFConverter";
import backgroundGenerator from "../helper/backgroundGenerator";

import { Box, Typography, Paper } from "@material-ui/core/";
import ".././App.css";
import images from ".././img/index";

const WeatherDetails = ({ details }) => {
	const { city, country, weather, temp, icon } = details;

	return (
		<Paper
			elevation={3}
			style={{
				backgroundImage: `url(${backgroundGenerator(weather, images)})`,
				backgroundSize: "cover",
			}}
		>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				height="100%"
				justifyContent="space-evenly"
				textAlign="center"
			>
				<Paper>
					<Typography variant="h4" color="primary">
						{city},{country}
					</Typography>
					<Typography variant="h4" color="primary">
						{new Date().toLocaleDateString()}
					</Typography>
				</Paper>
				<Paper variant="outlined">
					<Typography variant="h2" color="primary">
						{KtoFConverter(temp)}°F
					</Typography>
				</Paper>
				<Typography variant="h4" color="primary">
					{weather}
				</Typography>
				<img
					src={`http://openweathermap.org/img/wn/${icon}.png`}
					alt="weatherIcon"
					style={{ backgroundColor: "#f4709b", borderRadius: "25px" }}
				/>
			</Box>
		</Paper>
	);
};

export default WeatherDetails;
