import React, { useEffect, useState } from "react";

const Watch = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    console.log(timer);

    return () => clearInterval(timer);
  }, []);
  const formatHours = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  const formatZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      month: "long",
      year: "numeric",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <>
      <div className=" flex justify-center items-center  bg-gray-700 h-screen w-screen">
        <div className=" w-[400px] bg-gray-100 p-12 rounded-sm text-center ">
          <h1 className=" text-orange-700 text-3xl font-medium shadow-sm mx-12 mb-4">
            Digital Clock
          </h1>
          <div className=" text-4xl font-semibold mb-4">
            {formatZero(formatHours(currentTime.getHours()))} :{" "}
            {formatZero(currentTime.getMinutes())} :{" "}
            {formatZero(currentTime.getSeconds())}{" "}
            {currentTime.getHours() >= 12 ? "PM" : "AM"}
          </div>
          <div className=" text-xl text-gray-600 font-medium">
            {formatDate(currentTime)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
