import React, { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("Please click to get Advice");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className=" flex justify-center items-center bg-red-300  h-screen w-screen ">
      <div className=" text-center">
        <h1 className=" text-3xl text-purple-700 font-semibold">{advice}</h1>
        <br />
        <button
          onClick={getAdvice}
          className=" px-3 py-2 bg-blue-800 text-white rounded-sm hover:bg-blue-900  hover:shadow-sm"
        >
          Get Advice
        </button>
        <p className=" my-3 text-xl text-gray-700">
          You get {count} {count === 1 ? "Advice" : "Advices"}
        </p>
      </div>
    </div>
  );
};

export default Advice;
