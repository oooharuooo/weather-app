import React from "react";
import SingleForeCast from "./SingleForeCast";

import { Paper,Box ,Grid, Typography } from "@material-ui/core/";

const ForeCastDetail = ({ forecast }) => {
	return (
		<Paper
			elevation={6}
			style={{ height: "100%" }}
			className="paddingTopBottom"
		>
			<Box textAlign="center">
				<Typography variant="h3" color="secondary" gutterBottom>
					Next 5 days:
				</Typography>
			</Box>

			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={1}
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
							<SingleForeCast
								renamedForecast={renamedForecast}
								className="paddingTopBottom"
							/>
						</Grid>
					);
				})}
			</Grid>
		</Paper>
	);
};

export default ForeCastDetail;
