import axios from 'axios';
import { API_URL } from './constants';

const Api = axios.create({
  baseURL: API_URL,
});

Api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { Api };
