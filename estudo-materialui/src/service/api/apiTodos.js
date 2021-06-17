import fetchAPI from '../../utils/functions/request';

const HttpClient = {
  post: async (body) => {
    return fetchAPI({
      method: 'post',
      url: '/todos',
      body});
  },
  get: async (id) => {
    return fetchAPI({
      method: 'get',
      url: `/todos${id}`,
    });
  },
  list: async () => {
    return fetchAPI({
      method: 'get',
      url: '/todos',
    });
  },
  delete: async (id) => {
    return fetchAPI({
      method: 'delete',
      url: `/todos${id}`,
    });
  },
  put: async (id, body ) => {
    return fetchAPI({
      method: 'put',
      url: `/todos${id}`,
      body,
    });
  },
};

export default HttpClient;
