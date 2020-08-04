import React from "react";

export default (props) => {
	const mdc = (x, y) => {
		if (y === 0) {
			return x;
		} else {
			return mdc(y, x % y);
		}
	};

	return (
		<div>
			<h3>
				O mdc de {props.x} e {props.y} é: {mdc(props.x, props.y)}
			</h3>
		</div>
	);
};
