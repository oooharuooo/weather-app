import React, { useState, useEffect, useCallback } from "react";
import WeatherDetails from "./WeatherDetails";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";

import axios from "axios";

import {
	Container,
	Typography,
	Box,
	CircularProgress,
} from "@material-ui/core";

const api = {
	url: "https://api.openweathermap.org/data/2.5/weather?q=",
	id: "&APPID=fdb99a80ed033a1adc4e1e125b88efa7",
};

const Weather = ({ darkState, setDarkState }) => {
	const [weatherData, setWeatherData] = useState({});
	const [query, setQuery] = useState("San Diego");
	const [error, setError] = useState("");

	const [isLoading, setIsLoading] = useState(true);

	// Fetching Data
	const fetchData = useCallback(async () => {
		try {
			const {
				data: { weather, main, sys, name },
			} = await axios.get(`${api.url}${query}${api.id}`);
			const renamedData = {
				weather: weather[0].main,
				icon: weather[0].icon,
				temp: main.temp,
				country: sys.country,
				city: name,
			};

			setWeatherData(renamedData);
			setIsLoading(false);
		} catch (e) {
			setError("Please input valid location!");
		}
	}, [query]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	// Show Error
	useEffect(() => {
		setTimeout(() => setError(""), 2000);
	}, [error]);
	return (
		<Container maxWidth="sm" >
			<Box
				height="70vh"
				display="flex"
				flexDirection="column"
				borderRadius="50%"
				justifyContent="space-evenly"
			>
				{isLoading ? (
					<Box alignSelf="center">
						<CircularProgress />
					</Box>
				) : (
					<>
						<Box display="flex" flexDirection="row">
							<Box flexGrow={1} textAlign="center">
								<Typography variant="h1" color="primary">
									Weather's App
								</Typography>
							</Box>
							<DarkMode darkState={darkState} setDarkState={setDarkState} />
						</Box>
						<SearchBar setQuery={setQuery} />
						<Box textAlign="center">
							<Typography variant="h6" color="secondary">
								{error}
							</Typography>
						</Box>

						<WeatherDetails details={weatherData} />
					</>
				)}
			</Box>
		</Container>
	);
};

export default Weather;
