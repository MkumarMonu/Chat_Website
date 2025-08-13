import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Layout from "./components/Layout";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import Chat from "./pages/Chat";
import Default from "./pages/Default";

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
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
          <Route path="/" element={<Default />} />
          <Route path="/home" element={<Home />} />
          <Route path="/check-request" element={<About />} />
          <Route path="/connect-with-friends" element={<ContactUs />} />
          <Route path="/chat/:targetUserId/:chatWithUser" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
