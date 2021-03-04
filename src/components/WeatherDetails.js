import React from "react";

import KtoFConverter from "../helper/KtoFConverter";

const WeatherDetails = ({ details }) => {
	const {
		city,
		country,
		weather,
		description,
		temp,
		temp_min,
		temp_max,
	} = details;

	return (
		<>
			<h1>
				{city},{country}
			</h1>
			<h3>{KtoFConverter(temp)}°F</h3>
			<h4>
				Min:{KtoFConverter(temp_min)}°F Max:
				{KtoFConverter(temp_max)}°F
			</h4>
			<h3>{weather}</h3>
			<h3>{description}</h3>
		</>
	);
};

export default WeatherDetails;
