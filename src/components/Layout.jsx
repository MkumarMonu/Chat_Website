import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import LoginPage from "./Login";

function Layout() {
  const isLoggedIn = false;
  return (
    <div>
      <Navbar />
      {/* <h1>this is layout</h1> */}
      <Outlet />
      {isLoggedIn ? <LoginPage /> : <h1>this is your dashboard</h1>}
      <Footer />
    </div>
  );
}

export default Layout;
