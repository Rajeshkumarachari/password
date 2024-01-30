import React from "react";
import App from "./App";
import Currency from "./Currency";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Code from "./components/Code";

const Main = () => {
  return (
    <BrowserRouter>
      <div className=" flex justify-center bg-slate-200 ">
        <Link
          to={"/"}
          className=" text-blue-900 font-semibold border hover:underline text-xl mx-3  hover:text-blue-950"
        >
          Password Generator
        </Link>
        <Link
          to={"/code"}
          className=" text-blue-900 font-semibold border hover:underline text-xl  hover:text-blue-950 mx-3"
        >
          ₹ QR Code Scanner
        </Link>
        <Link
          to={"/currency"}
          className=" text-blue-900 font-semibold border hover:underline text-xl mx-3 hover:text-blue-950"
        >
          ₹ Currency Project
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/code" element={<Code />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
