import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.29.141.144:8080'
})

export default api;