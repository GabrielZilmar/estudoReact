import React from "react";

import "./App.scss";

import Contador from "./Components/Contador/Contador.jsx";
import ComponenteComParametro from "./Components/Contador/ComponenteComParametro";
import Card from "./Components/layout/Card.jsx";

export default (props) => (
	<div className="App">
		<Card titulo="Primeiro Conteudo">
			<Contador></Contador>
		</Card>
		<Card titulo="Componete com parametro">
			<ComponenteComParametro
				titulo="Titulo de exemplo"
				subtitulo="Subtitulo exemplo"
			></ComponenteComParametro>
		</Card>
		<Card titulo="Teste">Conteudo</Card>
	</div>
);
