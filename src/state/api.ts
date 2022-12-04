import axios from "axios";

export const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

Api.interceptors.request.use(
  (config) => {
    config.url = config.url + `&apiKey=${import.meta.env.VITE_API_KEY}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
