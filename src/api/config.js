import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001",
});

// Add a request interceptor
instance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
);

// Add a response interceptor
instance.interceptors.response.use(
    ({
        data,
    }) => data,
    (error) => Promise.reject(error),
);

export default instance;