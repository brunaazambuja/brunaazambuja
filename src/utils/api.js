import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mailer-backend-123.herokuapp.com',
});

export default api;
