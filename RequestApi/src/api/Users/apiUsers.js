const axios = require('axios').default;

const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

export default api;
