import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://83.220.174.249:5345/api/',
  baseURL: 'https://api.vsebanki.kg/api',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});

export default instance;
