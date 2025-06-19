import { apiRequest } from "../../services/requestHandler.js";

export const getChatApi = async (targetUserId) => {
  return await apiRequest("get", `chat/chatHistory/${targetUserId}`);
};

