import React, { useState } from "react";

const StrongPassword = () => {
  const [length, setLength] = useState(8);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const generatePassword = () => {
    let charSet = "";
    if (upper) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (number) charSet += "0123456789";
    if (symbol) charSet += "!@#$%^&*()_-+=";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
    setShow(false);
  };
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setShow(true);
  };
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
          <input
            type="checkbox"
            id="upper"
            checked={upper}
            onChange={(e) => setUpper(e.target.checked)}
          />
          <label
            htmlFor="upper"
            className=" mx-3 cursor-pointer hover:text-gray-500"
          >
            Include Uppercase
          </label>
        </div>
        <div className=" flex mx-3">
          <input
            type="checkbox"
            id="lower"
            checked={lower}
            onChange={(e) => setLower(e.target.checked)}
          />
          <label
            htmlFor="lower"
            className=" mx-3 cursor-pointer hover:text-gray-500"
          >
            Include Lowercase{" "}
          </label>
        </div>
        <div className=" flex mx-3">
          <input
            type="checkbox"
            id="numbers"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
          <label
            htmlFor="numbers"
            className=" mx-3 cursor-pointer hover:text-gray-500 "
          >
            Include Numbers{" "}
          </label>
        </div>
        <div className=" flex mx-3">
          <input
            type="checkbox"
            id="symbol"
            checked={symbol}
            onChange={(e) => setSymbol(e.target.checked)}
          />
          <label
            htmlFor="symbol"
            className=" mx-3 cursor-pointer hover:text-gray-500"
          >
            Include Symbol
          </label>
        </div>
        <button
          onClick={generatePassword}
          className=" border px-5 py-2 my-3 flex mx-5 bg-blue-700 rounded-md hover:bg-blue-800 text-yellow-100"
        >
          Generate Password
        </button>
        <div className=" my-3 py-5">
          <input
            type="text"
            value={password}
            readOnly
            className=" border py-[7px]  w-[300px]  outline-none "
          />
          <button
            onClick={copyPassword}
            className=" px-2 py-2 bg-slate-300  rounded-r-md "
          >
            Copy
          </button>
          {show && (
            <h1 className=" mt-3 text-lg font-semibold text-green-700">
              Copied !
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default StrongPassword;
