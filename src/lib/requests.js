import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '8000'}`,
});

export const setHeaders = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const request = async (endpoint, body, method) => {
  try {
    const response = await api[method](endpoint, body);
    return response.data;
  } catch (error) {
    if (error.response) {
      return {error: error.response.data, status: error.response.status};
    }
  }
};

export default api;
