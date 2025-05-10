import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-5 text-gray-800">
          Login to Chat
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            {/* <Mail className="absolute left-3 top-3 text-gray-400" /> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            {/* <Lock className="absolute left-3 top-3 text-gray-400" /> */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
          >
            Login
          </button>
          <div className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-500 hover:underline">
              Register Now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
