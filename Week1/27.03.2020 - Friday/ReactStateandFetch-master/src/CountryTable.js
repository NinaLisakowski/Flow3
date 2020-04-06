import React from "react";

const CountryTable = ({ labels, countries }) => {
	const moreThanOne = array => {
		if (array.length > 1) {
			return (
				<>
					{array[0]}(+{array.length - 1})
				</>
			);
		} else {
			return <>{array[0]}</>;
		}
	};

	console.log(labels);
	return (
		<div>
			<p>
				Replace the thead section with a row generated from the Labels endpoint
			</p>
			<p>
				Replace the tbody section with rows generated from the countries
				endpoint
			</p>
			<table className="table">
				<thead>
					<tr>
						{labels.map((lab, index) => {
							return <th key={index}>{lab}</th>;
						})}
					</tr>
				</thead>

				<tbody>
					{countries.map(country => {
						return (
							<tr key={country.name}>
								<td>{country.name}</td>
								<td>{country.capitol}</td>
								<td>{country.region}</td>
								<td>{country.population}</td>
								<td>{country.area}</td>
								<td>{moreThanOne(country.timezones)}</td>
								<td>{moreThanOne(country.borders)}</td>
								<td>{moreThanOne(country.topLevelDomain)}</td>
								<td>{moreThanOne(country.currencies)}</td>
								<td>{moreThanOne(country.languages)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default CountryTable;
