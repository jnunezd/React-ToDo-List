import React, { useState, useEffect } from "react";

import { isContext } from "vm";

//create your first component

export function Home() {
	const [message, setMessage] = useState([
		"Cras justo odio",
		"Dapibus ac facilisis in",
		"Morbi leo risus",
		"Porta ac consectetur ac",
		"Vestibulum at eros"
	]);

	function addMessage(e) {
		if (e.target.value != "" && e.keyCode == 13) {
			let mess = message.concat(e.target.value);
			setMessage(mess);
			e.target.value = "";
		}
	}

	function deleteMessage(i) {
		let mess = message.slice();
		mess.splice(i, 1);
		setMessage(mess);
	}

	function showDelete(i) {
		let icon = document.querySelector("#item" + i);
		icon.classList.remove("hide");
	}

	function hideDelete(i) {
		let icon = document.querySelector("#item" + i);
		icon.classList.add("hide");
	}

	// function getTodos() {
	// 	fetch("https://jsonplaceholder.typicode.com/todos/")
	// 		.then(response => response.json())
	// 		.then(json => {
	// 			setMessage(json);
	// 		});
	// }

	// useEffect(() => {
	// 	getTodos();
	// }, []);

	return (
		<div className="card">
			<div className="card-body">
				<div className="form-group">
					<input
						type="text"
						name=""
						className="form-control"
						placeholder="What needs to be done?"
						onKeyDown={e => addMessage(e)}
					/>
				</div>
				<ul className="list-group">
					{message.length > 0 &&
						message.map((item, i) => {
							return (
								<li
									key={i}
									className="list-group-item"
									onMouseOver={() => showDelete(i)}
									onMouseOut={() => hideDelete(i)}>
									{item}{" "}
									<i
										id={"item" + i}
										className="fa fa-trash float-right hide"
										onClick={() => deleteMessage(i)}
									/>
								</li>
							);
						})}
				</ul>
				<p className="card-text">
					{message.length > 0
						? message.length + " items left."
						: "You don't have To-do's"}
				</p>
			</div>
		</div>
	);
}
