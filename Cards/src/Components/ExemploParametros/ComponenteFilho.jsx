import React from "react";

const Contador = (props) => {
	return (
		<div>
			<h2>Nomes:</h2>
			{props.children}
		</div>
	);
};

export default Contador;

/**
 * Para fazer esse mesmo componente, utilizando menos sintexe:
 * const () =>
 *   <>
 *     <h1>Hello World!</h1>
 *     <h1>Hello World! 2</h1>
 *   <>
 *
 */
