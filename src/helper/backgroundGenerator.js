
const backgroundGenerator = (weather,img) => {
	if (weather === "Clouds") return img.cloudy;
	else if (weather === "Clear") return img.clearSky;
	else if (weather === "Snow") return img.snow;
	else if (weather === "Rain" || weather === "Drizzle") return img.rain;
	else if (weather === "Thunderstorm") return img.thunder;
	else return img.mist;
};

export default backgroundGenerator;
