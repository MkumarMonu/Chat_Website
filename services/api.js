// services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/v1/user", // Replace with your base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default API;
