import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Home() {
	const [message, setMessage] = useState([
		"Cras justo odio",
		"Dapibus ac facilisis in",
		"Morbi leo risus",
		"Porta ac consectetur ac",
		"Vestibulum at eros"
	]);

	const [newMessage, setNewMessage] = useState("");

	function addMessage(e) {
		if (e.target.value != "" && e.keyCode == 13) {
			setMessage(message.concat(e.target.value));
			e.target.value = "";
		}
	}

	function deleteMessage(i) {
		let mess = message.slice();
		mess.splice(i, 1);
		setMessage(mess);
	}

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
								<li key={i} class="list-group-item">
									{item}{" "}
									<i
										className="fa fa-trash float-right"
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
