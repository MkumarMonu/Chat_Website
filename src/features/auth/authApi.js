// features/auth/authAPI.js
import { apiRequest } from "../../../services/requestHandler";

export const loginAPI = (credentials) =>
  apiRequest("post", "/user/login", credentials);
export const registerAPI = (userData) =>
  apiRequest("post", "/user/register", userData);

export const fetchUserApi = () => apiRequest("get", "/user/getUser");
export const fetchAllUserApi = () =>
  apiRequest("get", `/user/getAllUser/${1}/${100}`);

export const getYourConnections = () => apiRequest("get", `/user/connections`);

export const logoutUserApi = () => apiRequest("post", "/user/logout");
