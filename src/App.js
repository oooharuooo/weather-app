import React,{ useState} from "react";
import Weather from "./components/Weather";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


function App() {
	const [darkState, setDarkState] = useState(false);

	const theme = createMuiTheme({
		typography: {
			h1: {
				fontSize: "4rem",
				"@media (max-width:600px)": {
					fontSize: "2rem",
				},
			},
		},
		palette: {
			type: darkState ? "dark" : "light",
			primary: {
				main: darkState ? "#1fbd23" : "#3964b1",
			},
			secondary: {
				main: darkState ? "#e6c2d1" : "#009688",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Weather darkState={darkState} setDarkState={setDarkState}/>
		</ThemeProvider>
	);
}

export default App;
