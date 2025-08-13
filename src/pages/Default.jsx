import React from "react";
import { TypeAnimation } from "react-type-animation";
import HighlightText from "../components/HighlightText";
import { Link } from "react-router-dom";

function Default() {
  let codeBlock = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<title>Be Connected</title>\n</head>\n <body>\n<div id="root"></div>\n<script type="module" src="/src/main.jsx"></script>\n</body>\n</html>`;

  return (
    <div className="flex min-h-[85vh] justify-center items-center p-4 lg:p-10 ">
      <div className="grid grid-cols-1 content-center lg:grid-cols-2 w-full h-full  gap-6 lg:gap-8 ">
        {/* Left section */}
        <div className="w-full h-full bg-amber-400 border-gray-600 border-2 rounded-xl shadow-lg shadow-blue-800  overflow-hidden">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-1 p-2 bg-[#143b7a] rounded-t-lg">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold p-2">
              Connect with your
            </h1>
            <span className="text-lg  sm:text-xl md:text-3xl font-bold text-[#ebd405]">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  " Friends",
                  1000,
                  " Family",
                  1000,
                  " Colleagues",
                  1000,
                  " Team",
                  500,
                ]}
                speed={50}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Features list */}
          <div className="flex flex-col bg-[#20375c] gap-2 p-4 text-base sm:text-lg md:text-2xl flex-grow">
            <ul className="list-disc list-inside text-white space-y-2">
              <li>Chat securely</li>
              <li>Connect instantly with friends and colleagues</li>
              <li>Enjoy real-time messaging without delays</li>
              <li>Access your chats from any device, anytime</li>
              <li>Never lose a message — your history is safe</li>
              <li>Your personal data stays private and protected</li>
            </ul>
          </div>

          {/* Links */}
          <div className="grid  grid-cols-2 py-2 bg-[#143b7a]">
            <div className="grid grid-rows-2 gap-2 place-content-center ">
              <div className="text-center">
                <HighlightText text={"My Github :"} textColor={"#ebd405"} />
              </div>
              <div className="text-base sm:text-lg md:text-2xl underline  break-words">
                <Link
                  to="https://github.com/MkumarMonu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Github Profile
                </Link>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-2 place-content-center  ">
              <div className="text-center">
                <HighlightText text={"My Linkedin :"} textColor={"#ebd405"} />
              </div>
              <div className="text-base sm:text-lg md:text-2xl underline  break-words">
                <Link
                  to="https://www.linkedin.com/in/monu-kumar-219lp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Linkedin Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex bg-[#3b3e42] border-gray-600 border-2 rounded-xl shadow-lg shadow-blue-800   ">
          {/* <div className="flex  w-full"> */}
          {/* Line numbers */}
          <div className="flex flex-col items-center w-[9%] text-xs sm:text-sm md:text-xl rounded-l-xl bg-[#535557] text-white pt-2">
            {[...Array(14)].map((_, i) => (
              <p key={i}>{i + 1}</p>
            ))}
          </div>

          {/* Code animation */}
          <div className=" gap-2 text-sm sm:text-lg md:text-xl  font-semibold font-mono text-[#eebd2b] overflow-hidden pl-4 pt-2">
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
              sequence={[1000, codeBlock, 2000, ""]}
              repeat={Infinity}
              omitDeletionAnimation={true}
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Default;
