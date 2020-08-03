import React, { useState } from "react";

export default (props) => {
	const [nome, setNome] = useState("Zilmar");

	return (
		<>
			<h3>{nome}</h3>
			<input
				type="text"
				value={nome}
				onChange={(event) => setNome(event.target.value)}
			></input>
		</>
	);
};
