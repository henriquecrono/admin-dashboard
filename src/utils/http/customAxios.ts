import axios, { AxiosRequestConfig } from 'axios';

const fetchClient = (timeout = 2000000) => {
	const REACT_APP_API_HOST = 'https://pokeapi.co/api/v2';

	const defaultOptions: AxiosRequestConfig = {
		baseURL: REACT_APP_API_HOST,
		method: 'get',
		headers: {
			'Content-Type': 'application/json',
		},
		timeout: timeout,
		timeoutErrorMessage: 'timeout',
	};

	const instance = axios.create(defaultOptions);

	return instance;
};

export default fetchClient;
