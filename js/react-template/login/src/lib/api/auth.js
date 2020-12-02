import axios from 'axios';

export const signUp = ({ id, password }) => axios.post('/auth/signup', { id, password });
export const login = ({ id, password }) => axios.post('/auth/login', { id, password });
export const checkStatus = () => axios.get('/auth/check');