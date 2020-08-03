import "./Contador.scss";

import React, { Component } from "react";

import Display from "./Display.jsx";
import PassoForm from "./PassoForm.jsx";
import Botoes from "./Botes.jsx";

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
			<div className="Contador">
				<h2>Contador</h2>
				<PassoForm
					passo={this.state.passo}
					onPassoChange={this.change}
				></PassoForm>

				<Display valor={this.state.valor}></Display>
				<Botoes inc={this.inc} dec={this.dec}></Botoes>
			</div>
		);
	}
}
