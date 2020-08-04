import api from './apiUsers';

export const getUsers = async () => {
	let request;
	await api
		.get('/users')
		.then((res) => {
			request = res;
		})
		.catch((err) => {
			request = err.response;
		});

	return request;
};
