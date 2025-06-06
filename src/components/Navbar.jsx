import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <div className="navbar bg-blue-800 shadow-sm fixed top-0">
      <div className="flex-1 flex justify-between">
        <div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        {/* <div>
          {isLogin ? (
            <div className="w-2xl  flex justify-end ">
              <button className="btn btn-accent font-bold">
                <Link to="/login" className="p-1 font-bold ">
                  Login
                </Link>
              </button>
              <button className="btn btn-accent font-bold">
                <Link to="/signup">Signup</Link>
              </button>
            </div>
          ) : (
            <div className=" flex  w-250  justify-end ">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="contactUs">Contact us</Link>
            </div>
          )}
        </div> */}
      </div>

      <div className="flex gap-2 w-4xl justify-between">
        {/* <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        /> */}

        <div className="flex w-13/14 justify-between">
          {isLogin !== null ? (
            <div className=" flex justify-around w-full">
              <Link to="/home" className=" text-2xl">
                Home
              </Link>
              <Link to="/about" className=" text-2xl">
                Check Requests
              </Link>
              <Link to="contactUs" className=" text-2xl">
                Connect with friends{" "}
              </Link>
            </div>
          ) : (
            <div className=" flex justify-end w-full ">
              <Link to="/login" className="p-1 font-bold ">
                <button className="btn btn-accent font-bold mr-1.5">
                  Login
                </button>
              </Link>
              <button className="btn btn-accent font-bold mr-2">
                <Link to="/signup">Signup</Link>
              </button>
            </div>
          )}
        </div>
        <div className="dropdown dropdown-end w-1/14 ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full mr-2 ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
