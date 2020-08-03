import React from "react";

import Filho from "./Filho.jsx";

export default (props) => (
	<div>
		<Filho {...props}>
			<strong>Weber</strong>
		</Filho>
		<Filho sobrenome="De Oliveira">Weber</Filho>
		<Filho sobrenome="Schrödinger">Erwin</Filho>
	</div>
);
