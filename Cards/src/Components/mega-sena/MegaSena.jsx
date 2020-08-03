import "./MegaSena.scss";

import { sorteia } from "./Sortear.js";

import React, { useState, useEffect } from "react";

export default (props) => {
	const [numeros, setNumero] = useState(Array(6));

	useEffect(() => {
		setNumero(Array(6).fill(0));
	}, []);

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
				<button
					onClick={() => {
						const array = sorteia(6);
						setNumero(array);
					}}
				>
					Sortear
				</button>
			</div>
		</div>
	);
};
