import axios from 'axios';
import config from '../config';

const client = axios.create({
  baseURL: `${config.homess.url}:${config.homess.port}`,
  headers: {
    Accept: 'application/json',
  },
});

export default client;
