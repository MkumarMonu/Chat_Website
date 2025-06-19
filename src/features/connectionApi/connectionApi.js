import { apiRequest } from "../../services/requestHandler.js";

export const getYourConnections = () => apiRequest("get", `/user/connections`);
