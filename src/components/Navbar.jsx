// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { logoutUser } from "../features/auth/authSlice";

// function Navbar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isLogin = useSelector((state) => state.auth.user);
//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate("/login");
//   };
//   return (
//     <div className="navbar bg-blue-800 shadow-sm ">
//       <div className="flex-1 flex justify-between">
//         <div>
//           <a className="btn btn-ghost text-xl">daisyUI</a>
//         </div>
//       </div>

//       <div className="flex gap-2 w-4xl justify-between">
//         <div className="flex w-13/14 justify-between">
//           {isLogin !== null ? (
//             <div className=" flex justify-around w-full">
//               <Link to="/home" className=" text-2xl">
//                 Home
//               </Link>
//               <Link to="/about" className=" text-2xl">
//                 Check Requests
//               </Link>
//               <Link to="/contactUs" className=" text-2xl">
//                 Connect with friends{" "}
//               </Link>
//             </div>
//           ) : (
//             <div className=" flex justify-end w-full ">
//               <Link to="/login" className="p-1 font-bold ">
//                 <button className="btn btn-accent font-bold mr-1.5">
//                   Login
//                 </button>
//               </Link>
//               <button className="btn btn-accent font-bold mr-2">
//                 <Link to="/signup">Signup</Link>
//               </button>
//             </div>
//           )}
//         </div>
//         <div className="dropdown dropdown-end w-1/14 ">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle avatar"
//           >
//             <div className="w-10 rounded-full mr-2 ">
//               <img
//                 alt="Tailwind CSS Navbar component"
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li>
//               <a>Settings</a>
//             </li>
//             <li>
//               <button onClick={handleLogout}>Logout</button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

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
    <div className="navbar bg-blue-800 text-white px-4 shadow-sm">
      {/* Left: Brand */}
      <div className="flex-1">
        <Link className="text-2xl font-bold" to="/home">
          Chat WYF
        </Link>
      </div>

      {/* Center: Desktop Nav */}
      <div className="hidden lg:flex gap-6 text-lg">
        {isLogin ? (
          <>
            <Link to="/home" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              Check Requests
            </Link>
            <Link to="/contactUs" className="hover:text-gray-300">
              Connect with friends
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-sm btn-accent">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-sm btn-accent">Signup</button>
            </Link>
          </>
        )}
      </div>

      {/* Right: Avatar and Dropdown */}
      {isLogin && (
        <div className="dropdown dropdown-end ml-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-white rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-white rounded-box w-52"
        >
          {isLogin ? (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">Check Requests</Link>
              </li>
              <li>
                <Link to="/contactUs">Connect with friends</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
