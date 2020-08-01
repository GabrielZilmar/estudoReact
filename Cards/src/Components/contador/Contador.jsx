import React, { Component } from "react";

/*
Caso importe só o React
    class Contador extends React.Component {
        
    }
*/

export default class Contador extends Component {
	constructor(props) {
		super(props);

		this.state = {
			passo: props.passo || 1,
			valor: props.valor || 0,
		};
	}

	inc = () => {
		this.setState({ valor: this.state.valor + this.state.passo });
	};

	dec = () => {
		this.setState({ valor: this.state.valor - this.state.passo });
	};

	change = (valor) => {
		this.setState({
			passo: valor,
		});
	};

	render() {
		return (
			<div>
				<h2>Contador</h2>
				<div>
					<label>Passo: </label>
					<input
						type="number"
						style={{ fontSize: "1.4rem", width: "60px" }}
						value={this.state.passo}
						onChange={(event) => {
							this.change(+event.target.value);
						}}
					></input>
				</div>

				<h4>Valor: {this.state.valor}</h4>

				<div>
					<button onClick={this.inc}>+</button>
					<button onClick={this.dec}>-</button>
				</div>
			</div>
		);
	}
}
