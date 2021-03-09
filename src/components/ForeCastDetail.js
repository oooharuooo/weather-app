import React from "react";
import SingleForeCast from "./SingleForeCast";

import { Grid } from "@material-ui/core/";

const ForeCastDetail = ({ forecast }) => {
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			spacing={2}
		>
			
			{forecast.map((detail, i) => {
				const renamedForecast = {
					day: detail.dt_txt,
					temp: detail.main.temp,
					weather: detail.weather[0].main,
					icon: detail.weather[0].icon,
				};
				return (
					<Grid item xs={4} sm={2} key={i}>
						
						<SingleForeCast renamedForecast={renamedForecast} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ForeCastDetail;
