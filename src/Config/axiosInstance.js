import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const tokenStr = localStorage.getItem("token");
    if (tokenStr) config.headers.Authorization = `Bearer ${tokenStr}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
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

export default axiosInstance;