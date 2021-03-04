import React, { useState, useEffect } from "react";

import axios from "axios";

import KtoFConverter from "./helper/KtoFConverter";

const api = {
	url: "http://api.openweathermap.org/data/2.5/weather?q=",
	id: "&APPID=fdb99a80ed033a1adc4e1e125b88efa7",
	query: "Los Angeles",
};

function App() {
	const [weatherData, setWeatherData] = useState({});

	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		const {
			data: { weather, main, sys, name },
		} = await axios.get(`${api.url}${api.query}${api.id}`);
		const renamedData = {
			weather: weather[0].main,
			description: weather[0].description,
			temp: main.temp,
			temp_min: main.temp_min,
			temp_max: main.temp_max,
			country: sys.country,
			city: name,
		};
		setWeatherData(renamedData);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<h1>
						{weatherData.city},{weatherData.country}
					</h1>
					<h3>{KtoFConverter(weatherData.temp)}°F</h3>
					<h4>
						Min:{KtoFConverter(weatherData.temp_min)}°F Max:
						{KtoFConverter(weatherData.temp_max)}°F
					</h4>
					<h3>{weatherData.weather}</h3>
					<h3>{weatherData.description}</h3>
				</>
			)}
		</div>
	);
}

export default App;
