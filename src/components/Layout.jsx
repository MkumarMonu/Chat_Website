import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/auth/authSlice";
import { fetchUserApi } from "../features/auth/authApi";

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const fetchUser = async () => {
    try {
      const response = await fetchUserApi();

      if (response?.success) {
        dispatch(addUser(response.user));
        // navigate("/home");
      } else {
        navigate("/");
      }
    } catch (error) {
      // if (error.status == 401) {
      //   navigate("/login");
      // }
      navigate("/");
      console.log(error.status);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <main className="flex-1 mt-[64px] mb-[64px] overflow-y-auto bg-[#1a203d]">
        <Outlet />
      </main>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
