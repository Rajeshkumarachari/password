import React, { useState } from "react";

const Money = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center  items-center bg-gray-500 ">
      <div className=" bg-gray-300 rounded-md w-[500px] px-4 py-4 ">
        <div></div>

        <div>
          <h1 className=" text-xl font-semibold  items-center text-center shadow-sm text-blue-700  mb-6">
            ₹ Currency Converter
          </h1>
          <div>
            <label htmlFor="amt">Amount :</label>
            <input
              type="text"
              id="amt"
              className=" border rounded-md border-gray-500 my-3 ml-[66px] w-[220px] py-1 mx-5 bg-green-50  outline-none pl-2"
            />
          </div>
          <div>
            <label htmlFor="fromCurrency">From Currency: </label>
            <select
              id="fromCurrency "
              className=" border border-gray-500 rounded-md my-3 py-1 mx-5 pl-2 bg-green-50"
            >
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP- British pound sterling</option>
              <option value="JPY">JPY-Japanese yen </option>
              <option value="AUD">AUD-Australian Dollar</option>
              <option value="CAD">CAD-Canadian dollar </option>
              <option value="CNY">CNY-Chinese Yuan </option>
              <option value="INR">INR- Indian Rupee </option>
              <option value="BRL">BRL- Brazilian real</option>
              <option value="ZAR">ZAR- South African rand </option>
            </select>
          </div>
          <div>
            <label htmlFor="toCurrency">To Currency: </label>
            <select
              id="toCurrency"
              className=" border border-gray-500 rounded-md my-3 py-1 mx-5 ml-10 pl-2 bg-green-50"
            >
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP- British pound sterling</option>
              <option value="JPY">JPY-Japanese yen </option>
              <option value="AUD">AUD-Australian Dollar</option>
              <option value="CAD">CAD-Canadian dollar </option>
              <option value="CNY">CNY-Chinese Yuan </option>
              <option value="INR">INR- Indian Rupee </option>
              <option value="BRL">BRL- Brazilian real</option>
              <option value="ZAR">ZAR- South African rand </option>
            </select>
          </div>
          <div>
            <p className=" border border-blue-400 py-2 px-3 rounded-md text-lg  font-semibold">
              {" "}
              Amount
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Money;
