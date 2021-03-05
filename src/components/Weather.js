import React, { useState, useEffect, useCallback } from "react";
import WeatherDetails from "./WeatherDetails";
import SearchBar from "./SearchBar";

import axios from "axios";

import {
	Container,
	Button,
	Typography,
	Box,
	CircularProgress,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const api = {
	url: "http://api.openweathermap.org/data/2.5/weather?q=",
	id: "&APPID=fdb99a80ed033a1adc4e1e125b88efa7",
};

const Weather = () => {
	const [weatherData, setWeatherData] = useState({});
	const [error,setError] = useState("");
	const [query, setQuery] = useState("San Diego");

	const [isLoading, setIsLoading] = useState(false);

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
	console.error(e);
		}
	}, [query]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<Container maxWidth="sm">
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
							<Box flexGrow={1}>
								<Typography variant="h1" color="primary">
									Weather's App
								</Typography>
							</Box>

							<Button
								variant="contained"
								style={{
									background:
										"linear-gradient(to right, #f3e0e0 40%, #423d3d 50%)",
									maxHeight: "40px",
								}}
							>
								<Brightness4Icon
									fontSize="default"
									style={{ color: "white" }}
								/>
							</Button>
						</Box>
							<SearchBar setQuery={setQuery} />
							<h1>{weatherData && error}</h1>
						<WeatherDetails details={weatherData} />
					</>
				)}
			</Box>
		</Container>
	);
};

export default Weather;
