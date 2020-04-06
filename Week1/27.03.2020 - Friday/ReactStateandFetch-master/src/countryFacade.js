const countryFacade = () => {
	const getLabels = () => {
		return fetch("http://localhost:3333/labels").then(res => res.json());
	};

	const getCountries = () => {
		return fetch("http://localhost:3333/countries").then(res => res.json());
	};

	return {
		getLabels,
		getCountries
	};
};

export default countryFacade();
