import React, { useState } from "react";

import Sub from "./Sub.jsx";

export default (props) => {
	const [texto, setTexto] = useState("Valor");
	const [num, setNum] = useState(0);

	const onClick = (valorGerado, string) => {
		setNum(valorGerado);
		setTexto(string);
	};

	return (
		<div>
			<h4>
				{texto}: {num}
			</h4>
			<Sub quandoClicar={onClick}></Sub>
		</div>
	);
};
