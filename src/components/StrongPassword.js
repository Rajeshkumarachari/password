import React, { useState } from "react";

const StrongPassword = () => {
  const [length, setLength] = useState(8);
  return (
    <div className=" text-center bg-teal-100 w-screen h-screen pt-10 ">
      <div className=" bg-white max-w-[400px] mx-auto py-[30px]  rounded-lg shadow-lg">
        <div>
          <h1 className=" py-2 text-2xl my-3 font-semibold text-gray-600 shadow-sm">
            Strong Password Generator
          </h1>
        </div>
        <div className=" flex mx-6">
          <label htmlFor="num">Password Length:</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            id="num"
            className=" outline-none border mx-2 rounded-sm px-2 py-1"
          />
        </div>
        <div className=" flex mx-3">
          <input type="checkbox" id="upper" />
          <label
            htmlFor="upper"
            className=" mx-3 cursor-pointer hover:text-gray-500"
          >
            Include Uppercase
          </label>
        </div>
        <div className=" flex mx-3">
          <input type="checkbox" id="lower" />
          <label
            htmlFor="lower"
            className=" mx-3 cursor-pointer hover:text-gray-500"
          >
            Include Lowercase{" "}
          </label>
        </div>
        <div className=" flex mx-3">
          <input type="checkbox" id="numbers" />
          <label
            htmlFor="numbers"
            className=" mx-3 cursor-pointer hover:text-gray-500 "
          >
            Include Numbers{" "}
          </label>
        </div>
        <div className=" flex mx-3">
          <input type="checkbox" id="symbol" />
          <label
            htmlFor="symbol"
            className=" mx-3 cursor-pointer hover:text-gray-500"
          >
            Include Symbol{" "}
          </label>
        </div>
        <button className=" border px-5 py-2 my-3 flex mx-5 bg-blue-700 rounded-md hover:bg-blue-800 text-yellow-100">
          Generate Password
        </button>
        <div className=" my-3 py-5">
          <input
            type="text"
            readOnly
            className=" border py-[7px]  w-[300px]  outline-none "
          />
          <button className=" px-2 py-2 bg-slate-300  rounded-r-md ">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrongPassword;
