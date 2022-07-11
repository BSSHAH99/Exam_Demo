import axios from "axios";

const baseURL = process.env.REACT_APP_API_DOMAIN;

// console.log("baseURL" + baseURL + "accessToken" + accessToken);
const instance = axios.create({
  baseURL: baseURL,
});
export default instance;

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access-token");

    if (accessToken) {
      config.headers["access-token"] = accessToken;
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
