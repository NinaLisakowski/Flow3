import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import countryFacade from "./countryFacade";
import "./App.css";

const App = props => {
	const [labels, setLabels] = useState([]);
	const [countries, setCountries] = useState([]);

	const updateLabels = async () => {
		const newLabels = await countryFacade.getLabels();
		console.log(newLabels);
		await setLabels(newLabels);
	};

	const updateCountries = async () => {
		const newCountries = await countryFacade.getCountries();
		await setCountries(newCountries);
	};

	useEffect(() => {
		updateLabels();
		setInterval(updateCountries, 3000);
	}, []);

	return (
		<div>
			<div className="App-header">
				<h2>React, State, Fetch</h2>
			</div>
			<div className="App-intro">
				<p>
					Your initial task is to fetch data from the server (see exercise for
					how to start it), and create a table below, with these data
				</p>
				<CountryTable labels={labels} countries={countries} />
			</div>
		</div>
	);
};

export default App;
