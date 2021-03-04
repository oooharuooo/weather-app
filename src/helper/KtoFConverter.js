import React from "react";

const KtoFConverter = (Kelvin) => {
	return Math.floor(((Kelvin - 273.15) * 9) / 5 + 32);
};

export default KtoFConverter;
