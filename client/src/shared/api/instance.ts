import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  responseType: 'json',
});

export default instance;
