// services/api.js
import axios from "axios";
// const BASE_URL = "https://chat-website-backend-tsau.onrender.com/api/v1";
const BASE_URL = "http://localhost:3000/api/v1";
const API = axios.create({
  baseURL: `${BASE_URL}`, // Replace with your base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default API;
