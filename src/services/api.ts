/* eslint-disable no-param-reassign */
// import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, {AxiosRequestConfig} from 'axios';

export const baseURL = 'https://api.m3o.com/v1/';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers.Authorization =
    'Bearer OWMyOTM0YWMtZGY4My00ZTc2LThkMTMtMjRjNzIwNmMxNGU1';

  return config;
});

export default api;
