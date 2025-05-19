// features/auth/authAPI.js
import { apiRequest } from "../../../services/requestHandler";

export const loginAPI = (credentials) =>
  apiRequest("post", "/login", credentials);
export const registerAPI = (userData) =>
  apiRequest("post", "/register", userData);

export const fetchUserApi = () => apiRequest("get", "/getUser");
console.log(fetchUserApi, "fetchUserApi");
export const logoutUserApi = () => apiRequest("post", "/logout");
