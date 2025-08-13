import React from "react";
import { TypeAnimation } from "react-type-animation";

function Default() {
  let codeBlock = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n`;
  return (
    <div className="flex  w-[100%] h-[86vh] justify-center">
      <div className="flex w-[75%] gap-4 h-full items-center ">
        {/*  Left section */}
        <div className="  h-2/3 w-1/2   bg-green-900 border-gray-600 border-2 rounded-lg shadow-lg shadow-blue-800">
          <div className="flex  items-center  gap-2 p-2 bg-[#437d37] rounded-t-lg">
            <h1 className="text-2xl font-semibold p-2 ">Connect with your</h1>
            <span className="text-1xl font-bold text-[#1a203d]">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  " Friends", // initially rendered starting point
                  1000,
                  " Family",
                  1000,
                  " Colleagues",
                  1000,
                  " Team",
                  500,
                ]}
                speed={50}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            </span>
          </div>

          <div className="flex flex-col gap-2 p-2 text-2xl">
            <ul className="list-disc list-inside text-white space-y-2">
              <li>Chat securely </li>
              <li>Connect instantly with friends and colleagues</li>
              <li>Enjoy real-time messaging without delays</li>
              <li>Access your chats from any device, anytime</li>
              <li>Never lose a message — your history is safe</li>
              <li>Your personal data stays private and protected</li>
            </ul>
          </div>
        </div>

        {/*  Right section */}
        <div className="flex h-1/2 w-1/2 p-2 bg-blue-900  border-gray-600 border-2 rounded-lg shadow-lg shadow-blue-800">
          <div className="flex flex-col w-[10%] text-2xl">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </div>

          <div className=" w-[90%] gap-2 text-2xl font-semibold font-mono text-yellow-500 ">
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                // height: "195px",
                display: "block",
              }}
              sequence={[codeBlock, 1000, ""]}
              repeat={Infinity}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Default;
