import React, { useState } from "react";

export function Jokes() {
	const [chuck, setChuck] = useState(<br />);
	const [dad, setDad] = useState(<br />);
	function getJokes() {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch("http://localhost:8080/securitystarter/api/jokes", options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setDad(data.joke1);
				setChuck(data.joke2);
			});
	}
	return (
		<div>
			<h1>Jokes</h1>
			<button onClick={getJokes}>Get jokes</button>
			<h2>Chuck Norris joke: </h2>
			<p>{chuck}</p>
			<h2>Dad joke:</h2>
			<p>{dad}</p>
		</div>
	);
}
