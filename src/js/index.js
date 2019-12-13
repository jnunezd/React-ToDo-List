//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import { Home } from "./component/home.js";

//Titulo
function Title() {
	return (
		<div className="titulo">
			<h1>To-Do List</h1>
		</div>
	);
}

//bloque de por hacer
function Todo(props) {
	return (
		<div>
			<h3 className="todo">{props.text}</h3>
			<button className="btn btn-primary">
				<i className="far fa-times-circle" />
			</button>
		</div>
	);
}

//Contador
function Counter(props) {
	return <p>{props.count}</p>;
}

// Suponiendo que haya un div con la id 'app' en el cuerpo de su sitio web original
// toda tu aplicación de react se agregará a esa div
ReactDOM.render(<Home />, document.querySelector("#app"));
