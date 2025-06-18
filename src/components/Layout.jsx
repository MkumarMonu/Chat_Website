import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/auth/authSlice";

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        // "http://localhost:3000/api/v1/user/getUser",
        "https://chat-website-backend-tsau.onrender.com/api/v1/user/getUser",
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        dispatch(addUser(response.data));
        navigate("/home");
      } else {
        navigate("/login");
      }
    } catch (error) {
      if (error.status == 401) {
        navigate("/login");
      }
      console.log(error.status);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <main className="flex-1 mt-[64px] mb-[64px] overflow-y-auto px-4">
        <Outlet />
      </main>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
