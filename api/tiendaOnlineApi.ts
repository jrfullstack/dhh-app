import axios from 'axios';

const dhhApi = axios.create ({
  baseURL: '/api'
})

export default dhhApi;
