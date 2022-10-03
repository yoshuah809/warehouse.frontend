import axios from "axios";

axios.interceptors.request.use(
  config => {
    config.baseURL = "http://localhost:3500/";
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(null, error => {
  return Promise.reject(error);
});

export default axios;
