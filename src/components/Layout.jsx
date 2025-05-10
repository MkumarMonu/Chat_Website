import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      {/* <h1>this is layout</h1> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
