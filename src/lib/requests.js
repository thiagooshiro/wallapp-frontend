import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.BACKEND_PORT}`,
});

export const setHeaders = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const request = async (endpoint, body, method) => {
    const response = await api[method](endpoint, body);
    return response;
};

export default api;
