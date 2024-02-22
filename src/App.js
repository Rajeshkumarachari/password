import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&()_+";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);
  return (
    <>
      <div className=" w-full max-w-md mx-auto  shadow-md rounded-md px-4 py-3 my-8  bg-blue-200 ">
        <p className=" text-blue-300"></p>
        <h1 className=" flex justify-center text-2xl font-semibold mb-10 text-orange-600">
          {" "}
          Password Generator
        </h1>
        <div className="flex justify-center shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className=" outline-none w-full py-2 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className=" bg-red-200 px-2 font-medium"
          >
            Copy
          </button>
        </div>
        <div className=" flex">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
            />
            <label htmlFor="length" className=" text-orange-600 font-semibold">
              {" "}
              Length: {length}
            </label>
          </div>
          <div className=" flex mx-2 items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label htmlFor="number" className="text-orange-600 font-semibold">
              {" "}
              Numbers
            </label>
          </div>
          <div className=" flex mx-2 items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label
              htmlFor="charInput"
              className="text-orange-600 font-semibold"
            >
              {" "}
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
