import axios from "axios";

interface ILogin {
  username: string;
  password: string;
  keepConnected: boolean;
}

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || 3001}`
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
}

export const requestLogin = async (endpoint: string, body: ILogin) => {
  const { data } = await api.post(endpoint, body);
  return data;
}

export default api;