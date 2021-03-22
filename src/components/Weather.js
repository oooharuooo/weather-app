import React, { useState, useEffect, useCallback } from "react";
import WeatherDetails from "./WeatherDetails";
import ForeCastDetail from "./ForeCastDetail";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";

import axios from "axios";

import {
	Grid,
	Container,
	Typography,
	Box,
	CircularProgress,
} from "@material-ui/core";


const api = {
	url: "https://api.openweathermap.org/data/2.5/",
	id: "&APPID=fdb99a80ed033a1adc4e1e125b88efa7",
	q1: "weather",
	q2: "forecast",
};

const Weather = ({ darkState, setDarkState }) => {
	const [weatherData, setWeatherData] = useState({});
	const [forecastData, setForecastData] = useState({});
	const [query, setQuery] = useState("San Diego");
	const [error, setError] = useState("");

	const [isLoading, setIsLoading] = useState(true);

	// Fetching Data
	const fetchData = useCallback(async () => {
		try {
			// Weather Data
			const {
				data: { weather, main, sys, name },
			} = await axios.get(`${api.url}${api.q1}?q=${query}${api.id}`);

			// ForeCast Data
			const {
				data: { list },
			} = await axios.get(`${api.url}${api.q2}?q=${query}${api.id}`);

			// Get 5 days from 40 days array of ForeCast Data
			let forecastData = [];
			for (let i = 0; i < list.length; i += 8) {
				forecastData.push(list[i]);
			}
			// rename weather Data
			const renamedData = {
				weather: weather[0].main,
				icon: weather[0].icon,
				temp: main.temp,
				country: sys.country,
				city: name,
			};
			setWeatherData(renamedData);
			setForecastData(forecastData);
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
		<Grid container direction="column" justify="center" alignItems="center">
			{isLoading ? (
				<Box display="flex" height="100vh" alignItems="center">
					<CircularProgress />
				</Box>
			) : (
				<Grid container direction="column" className="paddingContainer">
					<Container maxWidth="sm">
						<Grid item className="paddingTopBottom">
							<Box display="flex" flexDirection="row">
								<Box flexGrow={1} textAlign="center">
									<Typography variant="h1" color="primary">
										Weather's App
									</Typography>
								</Box>
								<DarkMode darkState={darkState} setDarkState={setDarkState} />
							</Box>
						</Grid>

						<Grid item className="paddingTopBottom">
							<SearchBar setQuery={setQuery} />

							<Box textAlign="center">
								<Typography variant="h6" color="secondary">
									{error}
								</Typography>
							</Box>
						</Grid>
					</Container>

					<Container maxWidth="md">
						<Grid container item spacing={4} alignItems="center">
							<Grid item xs={12} sm={4} md={5} className="paddingTopBottom">
								<WeatherDetails details={weatherData} />
							</Grid>
							<Grid item xs={12} sm={8} md={7} className="paddingTopBottom">
								<ForeCastDetail forecast={forecastData} />
							</Grid>
						</Grid>
					</Container>
				</Grid>
			)}
		</Grid>
	);
};

export default Weather;
