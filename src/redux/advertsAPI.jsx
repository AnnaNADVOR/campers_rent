import axios from 'axios';

axios.defaults.baseURL = 'https://65fc102814650eb2100b6d31.mockapi.io';

export async function fetchAdverts(page, limit, filterParams) {
	const axiosParams = {
		page,
		limit,
	};

	for (const key in filterParams) {
		axiosParams[key] = filterParams[key];
	}

	const { data } = await axios.get('adverts', {
		params: axiosParams,
	});
	return data;
}
