import React from "react";

export default (props) => (
	<div>
		{/*<button onClick={props.quandoClicar}>Alterar</button>*/}
		<button
			onClick={() => {
				props.quandoClicar(
					Math.floor(
						Math.random() * (Math.floor(3908721) - Math.ceil(1) + 1)
					) + Math.ceil(1),
					"Valor Gerado"
				);
			}}
		>
			Alterar
		</button>
	</div>
);
