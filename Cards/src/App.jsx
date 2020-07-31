import React from "react";

import "./App.scss";

import ComponenteFilho from "./Components/basicos/ComponenteFilho.jsx";
import ComponenteComParametro from "./Components/basicos/ComponenteComParametro";
import ComponenteRepeticao from "./Components/basicos/Repeticao.jsx";
import Condicional from "./Components/basicos/Condicional.jsx";
import ComponenteComFuncao from "./Components/basicos/ComponenteComFuncao.jsx";
import Pai from "./Components/comunicacao/direta/Pai.jsx";
import Super from "./Components/comunicacao/indireta/Super.jsx";
import Input from "./Components/form/Input.jsx";

import Card from "./Components/layout/Card.jsx";

export default (props) => (
	<div className="App">
		<Card titulo="Componente com filhos - props.childern" color="#75EB00">
			<ComponenteFilho>
				<ul>
					<li>Nome 1</li>
					<li>Nome 2</li>
					<li>Nome 3</li>
					<li>Nome 4</li>
				</ul>
			</ComponenteFilho>
		</Card>
		<Card titulo="Componete com parametro" color="#53BBF4">
			<ComponenteComParametro
				titulo="Titulo de exemplo"
				subtitulo="Subtitulo exemplo"
			></ComponenteComParametro>
		</Card>
		<Card titulo="Componente" color="#FF85CB">
			Conteudo
		</Card>
		<Card
			titulo="Loja"
			subtitulo="Componente com repetição .map"
			color="#FF432E"
		>
			<ComponenteRepeticao></ComponenteRepeticao>
		</Card>
		<Card titulo="Condicional" color="#FFAC00">
			<Condicional numero={10}></Condicional>
		</Card>
		<Card titulo="Componente com funcao" color="#20457C">
			<ComponenteComFuncao x={16} y={12}></ComponenteComFuncao>
		</Card>
		<Card titulo="Comunicação Direta" color="#FB6648">
			<Pai sobrenome="Marques"></Pai>
		</Card>
		<Card titulo="Comunicação Indireta" color="#60047A">
			<Super></Super>
		</Card>
		<Card titulo="Input" color="#F7F960">
			<Input></Input>
		</Card>
	</div>
);
