import { apiRequest } from "../../services/requestHandler.js";

export const loginAPI = async (credentials) => {
  return await apiRequest("post", "/user/login", credentials);
};
export const registerAPI = async (userData) => {
  return await apiRequest("post", "/user/register", userData);
};

export const fetchUserApi = () => apiRequest("get", "/user/getUser");
export const fetchAllUserApi = () =>
  apiRequest("get", `/user/getAllUser/${1}/${100}`);

export const logoutUserApi = () => apiRequest("post", "/user/logout");
// export const fetchUser = () => apiRequest("get", "/user/getUser");
