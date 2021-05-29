import Axios from 'axios';

const api = Axios.create({baseURL: 'https://jsonplaceholder.typicode.com/todos'});

const HttpClient = {
  post: async (url, body, token = '') => {
    let response;
    await api.post(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => {
      response = data;
    }).catch((error) => {
      response = error.response;
    });
    return response;
  },
  get: async (url, token) => {
    let response;
    await api.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => {
      response = data;
    }).catch((error) => {
      response = error.response;
    });
    return response;
  },
  delete: async (url, token) => {
    let response;
    await api.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => {
      response = data;
    }).catch((error) => {
      response = error.response;
    });
    return response;
  },
  put: async (url, body, token) => {
    let response;
    await api.put(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => {
      response = data;
    }).catch((error) => {
      response = error.response;
    });
    return response;
  },
};

export default HttpClient;
