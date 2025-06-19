import React from "react";
import { useState } from "react";
import { loginUser, registerUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(formData));
    if (result.type === "auth/registerUser/fulfilled") {
      if (result.payload?.success) {
        toast.success(result.payload.message || "Register successful!");
      } else {
        toast.error(result.payload?.message || "Registration failed.");
      }
    } else if (result.type === "auth/registerUser/rejected") {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center  h-[85vh] ">
      <div className="w-11/2 max-w-md p-5 bg-green-100 shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-5 text-gray-800">
          SignUp
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-1"
            >
              username
            </label>
            <input
              type="username"
              name="username"
              placeholder="Enter your username"
              className="pl-2 w-full border text-black border-gray-300 rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="pl-2 w-full border text-black border-gray-300 rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>{" "}
          <div className="relative">
            <label
              htmlFor="contact"
              className="block text-gray-700 font-medium mb-1"
            >
              contact number
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your contact number"
              className="pl-2 w-full border text-black border-gray-300 rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>{" "}
          <div className="relative">
            <label
              htmlFor="Avatar"
              className="block text-gray-700 font-medium mb-1"
            >
              Avatar
            </label>
            <input
              type="text"
              name="avatar"
              placeholder="Enter your avatar"
              className="pl-2 w-full border text-black border-gray-300 rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.avatar}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="pl-2 w-full border text-black border-gray-300 rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 rounded-md"
            >
              Sign up
            </button>
          )}
        </form>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="text-center text-sm text-gray-500 mt-4">
          Do you have an account?{" "}
          <a href="/login" className="text-indigo-500 hover:underline">
            Login Now
          </a>
        </div>
        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
}

export default Signup;
