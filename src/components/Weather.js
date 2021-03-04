import React, { useState, useEffect, useCallback } from "react";
import WeatherDetails from "./WeatherDetails";
import SearchBar from "./SearchBar";

import axios from "axios";

const api = {
	url: "http://api.openweathermap.org/data/2.5/weather?q=",
	id: "&APPID=fdb99a80ed033a1adc4e1e125b88efa7",
};

const Weather = () => {
	const [weatherData, setWeatherData] = useState({});
	const [query, setQuery] = useState("San Diego");

	const [isLoading, setIsLoading] = useState(false);

    const fetchData = useCallback(async () => {
        
		const {
			data: { weather, main, sys, name },
		} = await axios.get(`${api.url}${query}${api.id}`);
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
	}, [query]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<div>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<SearchBar setQuery={setQuery} />
					<WeatherDetails details={weatherData} />
				</>
			)}
		</div>
	);
};

export default Weather;
