// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import HighlightText from "../components/HighlightText";
// import { Link } from "react-router-dom";

// function Default() {
//   let codeBlock = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n`;
//   return (
//     <div className="flex  w-[100%] h-[86vh] justify-center">
//       <div className="flex w-[75%] gap-4 h-full items-center ">
//         {/*  Left section */}
//         <div className="  h-2/3 w-1/2   bg-green-900 border-gray-600 border-2 rounded-lg shadow-lg shadow-blue-800">
//           <div className="flex  items-center  gap-2 p-2 bg-[#437d37] rounded-t-lg">
//             <h1 className="text-2xl font-semibold p-2 ">Connect with your</h1>
//             <span className="text-1xl font-bold text-[#1a203d]">
//               <TypeAnimation
//                 preRenderFirstString={true}
//                 sequence={[
//                   500,
//                   " Friends", // initially rendered starting point
//                   1000,
//                   " Family",
//                   1000,
//                   " Colleagues",
//                   1000,
//                   " Team",
//                   500,
//                 ]}
//                 speed={50}
//                 style={{ fontSize: "2em" }}
//                 repeat={Infinity}
//               />
//             </span>
//           </div>

//           <div className="flex flex-col gap-2 p-2 text-2xl">
//             <ul className="list-disc list-inside text-white space-y-2">
//               <li>Chat securely </li>
//               <li>Connect instantly with friends and colleagues</li>
//               <li>Enjoy real-time messaging without delays</li>
//               <li>Access your chats from any device, anytime</li>
//               <li>Never lose a message — your history is safe</li>
//               <li>Your personal data stays private and protected</li>
//             </ul>
//           </div>

//           <div className="grid grid-rows-4  bg-amber-900  p-2 ">
//             <div className="row-span-2 grid-rows-1 bg-amber-600">
//               <HighlightText text={"My Github :"} />
//               <div className="text-2xl underline text-blue-400">
//                 <Link to="https://github.com/MkumarMonu">MyGithub.com</Link>
//               </div>
//             </div>
//             <div className="row-span-2 bg-amber-300">
//               <HighlightText text={"My Linkedin :"} />
//               <Link to="https://www.linkedin.com/in/monu-kumar-219lp/">
//                 Linkedin
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/*  Right section */}
//         <div className="flex h-1/2 w-1/2 p-2 bg-blue-900  border-gray-600 border-2 rounded-lg shadow-lg shadow-blue-800">
//           <div className="flex flex-col w-[10%] text-2xl">
//             <p>1</p>
//             <p>2</p>
//             <p>3</p>
//             <p>4</p>
//             <p>5</p>
//             <p>6</p>
//             <p>7</p>
//             <p>8</p>
//             <p>9</p>
//             <p>10</p>
//           </div>

//           <div className=" w-[90%] gap-2 text-2xl font-semibold font-mono text-yellow-500 ">
//             <TypeAnimation
//               style={{
//                 whiteSpace: "pre-line",
//                 // height: "195px",
//                 display: "block",
//               }}
//               sequence={[codeBlock, 1000, ""]}
//               repeat={Infinity}
//               omitDeletionAnimation={true}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Default;

import React from "react";
import { TypeAnimation } from "react-type-animation";
import HighlightText from "../components/HighlightText";
import { Link } from "react-router-dom";

function Default() {
  let codeBlock = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n`;

  return (
    <div className="flex min-h-[85vh] justify-center items-center p-4 lg:p-10 ">
      <div className="grid grid-cols-1 content-center lg:grid-cols-2 w-full h-full  gap-6 lg:gap-8 ">
        {/* Left section */}
        <div className="w-full  bg-[#20375c] border-gray-600 border-2 rounded-xl shadow-lg shadow-blue-800  overflow-hidden">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 p-2 bg-[#143b7a] rounded-t-lg">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold p-2">
              Connect with your
            </h1>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a203d]">
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
          <div className="flex flex-col gap-2 p-4 text-base sm:text-lg md:text-2xl flex-grow">
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
          <div className="grid  grid-cols-2 bg-amber-900 p-2">
            <div className=" bg-amber-600 p-2">
              <HighlightText text={"My Github :"} />
              <div className="text-base sm:text-lg md:text-2xl underline text-blue-400 break-words">
                <Link
                  to="https://github.com/MkumarMonu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MyGithub.com
                </Link>
              </div>
            </div>
            <div className=" bg-amber-300 p-2">
              <HighlightText text={"My Linkedin :"} />
              <Link
                to="https://www.linkedin.com/in/monu-kumar-219lp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg md:text-xl"
              >
                Linkedin
              </Link>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex bg-[#3b3e42] border-gray-600 border-2 rounded-xl shadow-lg shadow-blue-800   ">
          {/* <div className="flex  w-full"> */}
          {/* Line numbers */}
          <div className="flex flex-col items-center w-[9%] text-xs sm:text-sm md:text-xl rounded-l-xl bg-[#535557] text-white pt-2">
            {[...Array(15)].map((_, i) => (
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
