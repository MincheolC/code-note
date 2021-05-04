const axios = require('axios');

function request(options) {
  axios.interceptors.request.use((req) => {
    console.debug(req);
    return req;
  });

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        console.error(`${error.response.status} ${error.response.statusText}`);
      } else {
        console.error(error.message);
      }
    });
}

async function get({ url, baseURL }) {
  const options = {
    url,
    baseURL,
    method: 'get',
  };

  return request(options);
}

async function post({ url, baseURL, data }) {
  const options = {
    url,
    baseURL,
    method: 'post',
    data,
  };

  return request(options);
}

async function patch({ url, baseURL, data }) {
  const options = {
    url,
    baseURL,
    method: 'patch',
    data,
  };

  return request(options);
}

async function del({ url, baseURL, data }) {
  const options = {
    url,
    baseURL,
    method: 'delete',
    data,
  };

  return request(options);
}

module.exports = {
  get,
  post,
  patch,
  del,
};