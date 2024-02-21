import React from "react";
import App from "./App";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Code from "./components/Code";
import Advice from "./components/Advice";
import BodyMass from "./components/BodyMass";
import Money from "./components/Money";
import Watch from "./components/Watch";
import StrongPassword from "./components/StrongPassword";
import NewApp from "./components/questions/NewApp";

const Main = () => {
  return (
    <BrowserRouter>
      <div className=" flex justify-center bg-slate-200  flex-wrap ">
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
          to={"/advice"}
          className=" text-blue-900 font-semibold border hover:underline text-xl mx-3 hover:text-blue-950"
        >
          Advice
        </Link>
        <Link
          to={"/bmi"}
          className=" text-blue-900 font-semibold border hover:underline text-xl mx-3 hover:text-blue-950"
        >
          Body Mass Index
        </Link>
        <Link
          to={"/money"}
          className=" text-blue-900 font-semibold border hover:underline text-xl mx-3 hover:text-blue-950"
        >
          Money
        </Link>
        <Link
          to={"/time"}
          className=" text-blue-900 font-semibold border hover:underline text-xl mx-3 hover:text-blue-950"
        >
          Time
        </Link>
        <Link
          to={"/password"}
          className=" text-blue-900 font-semibold border hover:underline text-xl mx-3 hover:text-blue-950"
        >
          Strong Password
        </Link>
        <Link
          to={"/faqs"}
          className=" text-blue-900 font-semibold border hover:underline text-xl mx-3 hover:text-blue-950"
        >
          Accordion for React
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/code" element={<Code />} />
        <Route path="/bmi" element={<BodyMass />} />
        <Route path="/money" element={<Money />} />
        <Route path="/time" element={<Watch />} />
        <Route path="/password" element={<StrongPassword />} />
        <Route path="/faqs" element={<NewApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
