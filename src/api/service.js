import axios from "axios";
import { fetchUserApi } from "../features/auth/authApi";
import { addUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

export const fetchUserService = async () => {
  try {
    const response = await fetchUserApi();

    if (response?.success) {
      await useDispatch(addUser(response?.user));
    }
  } catch (error) {
    console.log(error);
  }
};
