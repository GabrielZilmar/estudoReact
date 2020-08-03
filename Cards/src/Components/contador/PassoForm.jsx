import React from "react";

export default (props) => {
	return (
		<div>
			<label>Passo: </label>
			<input
				type="number"
				value={props.passo}
				onChange={(event) => {
					props.onPassoChange(+event.target.value);
				}}
			></input>
		</div>
	);
};
