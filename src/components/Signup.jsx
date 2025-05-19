import React from "react";
import { useState } from "react";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "monu@gmail.com",
    password: "12345678",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(formData));
    if (result.meta.requestStatus === "fulfilled") {
      toast.success(
        result?.payload?.message || "Login successful! Redirecting..."
      );
      navigate("/home");
      // setTimeout(() => navigate("/home"), 2000);
    } else {
      toast.error(
        result?.payload?.message || "Login failed. Please try again."
      );
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-5 text-gray-800">
          Login to Chat
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="pl-10 w-full border text-black border-gray-300 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
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
              className="pl-10 w-full border text-black border-gray-300 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
            >
              Login
            </button>
          )}

          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-500 hover:underline">
              Register Now
            </a>
          </div>
        </form>

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
}

export default Signup;
