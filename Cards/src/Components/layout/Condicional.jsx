import React from "react";

export default (props) => {
	const paridade = (numero) => {
		return numero % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>;
	};

	return (
		<div>
			<h3>O numero {props.numero} é: </h3>
			{paridade(props.numero)}
		</div>
	);
};
