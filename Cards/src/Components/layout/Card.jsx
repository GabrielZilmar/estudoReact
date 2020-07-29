import React from "react";

import "./Card.scss";

export default (props) => (
	<div className="Card">
		<div className="Contudo">{props.children}</div>
		<div className="Footer">{props.titulo}</div>
	</div>
);
