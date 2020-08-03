import "./MegaSena.scss";

import React, { useState, useEffect } from "react";

export default (props) => {
	const [numeros, setNumero] = useState(Array(6));

	useEffect(() => {
		setNumero(Array(6).fill(0));
	}, []);

	const sorteia = () => {
		let array = new Array(6);
		numeros.map((numero, index) => {
			let gerado =
				Math.floor(
					Math.random() * (Math.floor(60) - Math.ceil(1) + 1)
				) + Math.ceil(1);

			while (array.indexOf(gerado) >= 0) {
				gerado =
					Math.floor(
						Math.random() * (Math.floor(60) - Math.ceil(1) + 1)
					) + Math.ceil(1);
			}

			array[index] = gerado;
		});

		array = array.sort((a, b) => {
			return a - b;
		});

		setNumero(array);
	};

	return (
		<div className="exibeSena">
			{numeros.map((numero, index) => {
				return (
					<div className="Bolinha" key={index}>
						{numero < 10 ? (numero = "0" + numero) : numero + ""}
					</div>
				);
			})}
			<div style={{ marginTop: 45 }}>
				<button onClick={sorteia}>Sortear</button>
			</div>
		</div>
	);
};
