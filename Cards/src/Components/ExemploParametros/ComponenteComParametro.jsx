import React from "react";

export default (param) => {
	return (
		<React.Fragment>
			<h3>{param.titulo}</h3>
			<h4>{param.subtitulo}</h4>
		</React.Fragment>
	);
};
