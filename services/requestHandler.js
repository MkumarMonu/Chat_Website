// services/requestHandler.js
import API from './api';

export const apiRequest = async (method, url, data = {}) => {
  try {
    const response = await API({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
