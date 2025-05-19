import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Layout from "./components/Layout";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Login /> */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
