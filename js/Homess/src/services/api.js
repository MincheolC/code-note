import {httpClient} from '../helpers';

export const checkStatus = () => {
  return httpClient
    .get('/v1/status')
    .then(response => response.data)
    .catch(error => {
      throw error.response;
    });
};
