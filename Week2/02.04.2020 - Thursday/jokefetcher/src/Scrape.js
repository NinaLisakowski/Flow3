import React, { useState } from "react";

export function Scrape() {
	const [scrape, setScrape] = useState([]);
	function getScrape() {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch("http://localhost:8080/securitystarter/api/scrape", options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setScrape(data);
			});
	}
	return (
		<div>
			<h1>Scrape</h1>
			<button onClick={getScrape}>Scrape</button>
			{scrape.map((d) => {
				return (
					<div key={scrape.indexOf(d)}>
						<ul>
							<li>
								URL: <a href={d.url}>{d.url}</a>
							</li>
							<li>TITLE: {d.title}</li>
							<li>DIV COUNT: {d.divCount}</li>
							<li>BODY COUNT: {d.bodyCount}</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
}
