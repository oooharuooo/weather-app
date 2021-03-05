import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	typography: {
		h1: {
			fontSize: "4rem",
			"@media (max-width:600px)": {
				fontSize: "2rem",
			},
		},
		button: {
		
		},
	},
});

export default theme;
