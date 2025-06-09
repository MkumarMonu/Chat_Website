import { apiRequest } from "../../../services/requestHandler.js";

export const sendRequestAPI = async (status, _id) => {
  return await apiRequest("post", `send/request/${status}/${_id}`);
};

export const getRequestAPI = async () => {
  return await apiRequest("get", `send/review/getAllRequest`);
};

export const acceptRequestAPI = async (requestId) => {
  return await apiRequest(
    "post",
    `send/acceptOrRejectRequest/accepted/${requestId}`
  );
};


// export const loginAPI = (credentials) =>
//   apiRequest("post", "/login", credentials);
