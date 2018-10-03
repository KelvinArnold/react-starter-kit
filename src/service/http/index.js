import axios from 'axios';

const API = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=230275770';

const config = {
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
}
// Create new Axios Instance
const HTTP = axios.create(config);
export {
  HTTP,
  API_KEY
};