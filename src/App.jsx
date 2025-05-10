import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Login /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
