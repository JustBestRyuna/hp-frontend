import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000',
  timeout: 5000,
});
