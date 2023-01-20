import axios from "axios";
import IClient from "../interfaces/IClient";
import ILogin from "../interfaces/ILogin";



const api = axios.create({
  baseURL: `http://localhost:3001`
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestClientData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
}

export const requestAddClient = async (endpoint: string, body: IClient) => {
  await api.post(endpoint, body);
}

export const requestLogin = async (endpoint: string, body: ILogin) => {
  const { data } = await api.post(endpoint, body);
  return data;
}

export default api;