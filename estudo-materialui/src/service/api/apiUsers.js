import fetchAPI from '../../utils/functions/request';

const HttpClient = {
  post: async (body) => {
    return fetchAPI({
      method: 'post',
      url: '/users',
      body});
  },
  get: async (id) => {
    return fetchAPI({
      method: 'get',
      url: `/users${id}`,
    });
  },
  list: async () => {
    return fetchAPI({
      method: 'get',
      url: '/users',
    });
  },
  delete: async (id) => {
    return fetchAPI({
      method: 'delete',
      url: `/users${id}`,
    });
  },
  put: async (id, body ) => {
    return fetchAPI({
      method: 'put',
      url: `/users${id}`,
      body,
    });
  },
};

export default HttpClient;
