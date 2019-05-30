import axios from 'axios';
import { USER_TOKEN } from './usersToken';

const Axios = axios.create({
  baseURL: 'https://mart-politico-app.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const setAxiosHeader = token => { Axios.defaults.headers.common.token = token; };
Axios.defaults.headers.common.token = USER_TOKEN;

export default Axios;
