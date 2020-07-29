import React from "react";

import "./App.scss";

import ComponenteFilho from "./Components/ExemploParametros/ComponenteFilho.jsx";
import ComponenteComParametro from "./Components/ExemploParametros/ComponenteComParametro";
import ComponenteRepeticao from "./Components/layout/Repeticao.jsx";
import Condicional from "./Components/layout/Condicional.jsx";
import ComponenteComFuncao from "./Components/layout/ComponenteComFuncao.jsx";
import Card from "./Components/layout/Card.jsx";

export default (props) => (
	<div className="App">
		<Card titulo="Componente com filhos - props.childern">
			<ComponenteFilho>
				<ul>
					<li>Nome 1</li>
					<li>Nome 2</li>
					<li>Nome 3</li>
					<li>Nome 4</li>
				</ul>
			</ComponenteFilho>
		</Card>
		<Card titulo="Componete com parametro">
			<ComponenteComParametro
				titulo="Titulo de exemplo"
				subtitulo="Subtitulo exemplo"
			></ComponenteComParametro>
		</Card>
		<Card titulo="Componente">Conteudo</Card>
		<Card titulo="Loja" subtitulo="Componente com repetição .map">
			<ComponenteRepeticao></ComponenteRepeticao>
		</Card>
		<Card titulo="Condicional">
			<Condicional numero={10}></Condicional>
		</Card>
		<Card titulo="Componente com funcao">
			<ComponenteComFuncao x={16} y={12}></ComponenteComFuncao>
		</Card>
	</div>
);
