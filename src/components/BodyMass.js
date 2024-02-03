import React, { useState } from "react";
import { BODY_MASS_IMAGE } from "../hooks/constant";

const BodyMass = () => {
  const [hight, setHight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  const calculateBmi = () => {
    if (hight && weight) {
      const hightInMeters = hight / 100;
      const bmiValue = weight / (hightInMeters * hightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
    } else {
      setBmi(null);
      setBmiStatus("");
    }
  };

  return (
    <div className=" w-[100vw] h-[100vh] flex justify-center items-center  bg-slate-600">
      <div className="flex w-[800px] h-[500px] p-[20px] bg-white rounded-md ">
        <div className="w-[350px]">
          <img src={BODY_MASS_IMAGE} alt="logo" className=" h-full" />
        </div>
        <div className="  flex-1">
          <h1 className=" text-2xl font-semibold mb-4 shadow-sm w-fit">
            BMI Calculator
          </h1>
          <p className=" text-red-800 text-sm mb-3">
            {" "}
            Please enter valid numeric values for hight and weight..
          </p>
          <div className=" mb-2 block">
            <label htmlFor="height" className=" block text-sm ">
              Height(cm):
            </label>
            <input
              type="text"
              value={hight}
              onChange={(e) => setHight(e.target.value)}
              id="height"
              className=" border rounded-sm border-blue-500 pl-2 my-2 py-1"
            />
          </div>
          <div className=" mb-2">
            <label htmlFor="weight" className=" block text-sm">
              Weight(kg):{" "}
            </label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              id="weight"
              className="border rounded-sm pl-2 border-blue-500 my-2 py-1"
            />
          </div>
          <button
            onClick={calculateBmi}
            className=" bg-green-500  text-white px-3 py-2 rounded-md hover:bg-green-600 hover:text-gray-200 delay-200"
          >
            Calculate BMI
          </button>
          {bmi !== null && (
            <div className=" mt-3 border  border-blue-500 p-3 rounded-sm">
              <p>Your BMI is:{bmi} </p>
              <p>Status: {bmiStatus} </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyMass;
