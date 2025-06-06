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
        "http://localhost:3000/api/v1/user/getUser",
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(response.data));
      // navigate("/home");
      console.log(response.data.status);
    } catch (error) {
      if (error.status == 401) {
        navigate("/login");
      }
      console.log(error.status);
    }
  };

  useEffect(() => {
    if (!user) {
      // const response = dispatch(fetchUser());
      // console.log("response//////////", response);
      fetchUser();
    }
  }, []);
  // const isLoggedIn = false;
  return (
    <div>
      <Navbar />
      {/* <h1>this is layout</h1> */}
      <Outlet />
      {/* {isLoggedIn ? <LoginPage /> : <h1>this is your dashboard</h1>} */}
      <Footer />
    </div>
  );
}

export default Layout;
