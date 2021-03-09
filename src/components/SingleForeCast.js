import React from "react";
import KtoFConverter from "../helper/KtoFConverter";
import { Box, Typography, Paper } from "@material-ui/core/";

const SingleForeCast = ({ renamedForecast: { day, temp, weather, icon } }) => {
	const dayConverter = () => {
		const newFullDay = new Date(day);
		const newDate = newFullDay.getDate();
		const newMonth = newFullDay.getMonth();
		return `${newMonth + 1}/${newDate}`;
	};
	
	return (
		<Paper>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="space-evenly"
				textAlign="center"
			>
				<Typography variant="h5" color="secondary">
					{dayConverter()}
				</Typography>

				<Typography variant="h4" color="secondary">
					{KtoFConverter(temp)}°F
				</Typography>

				<Typography variant="h5" color="secondary">
					{weather}
				</Typography>
				<img
					src={`http://openweathermap.org/img/wn/${icon}.png`}
					alt="weatherIcon"
					style={{ backgroundColor: "#00bcd4", borderRadius: "25px" }}
				/>
			</Box>
		</Paper>
	);
};

export default SingleForeCast;
