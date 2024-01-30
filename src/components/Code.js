import React, { useState } from "react";

const Code = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [imgSize, setImgSize] = useState("150");

  async function generatrQr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${imgSize}x${imgSize} &data=${encodeURIComponent(
        data
      )}`;
      setImg(url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const download = () => {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${data}.png `;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="w-[100%] h-[100vh] flex-col items-center justify-center mx-[500px] my-3 ">
      <h1 className=" font-medium  text-3xl shadow-sm w-fit my-1 mb-4">
        QR CODE GENERATOR For your
      </h1>
      {loading && <p>Please wait...</p>}
      <div className=" mt-3">
        {img && <img src={img} alt="qr code" className=" p-3 shadow-md " />}
      </div>
      <div>
        <label
          htmlFor="dataInput"
          className=" block mb-2 text-[#4aa6e4] mt-5 font-medium "
        >
          Data for QR CODE for your{" "}
          <a href="/" className=" cursor-pointer">
            {" "}
            {data}
          </a>
        </label>
        <input
          type="text"
          placeholder="Enter your website for QR Code"
          className=" p-3 border rounded-md border-blue-800 w-[300px] "
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <label
          htmlFor="sizeInput"
          className=" block mb-2 text-[#5ab6f3] mt-2 font-medium "
        >
          Image size(e,g., 150,200)
        </label>
        <input
          type="text"
          placeholder="Enter image size"
          value={imgSize}
          onChange={(e) => setImgSize(e.target.value)}
          className=" p-3 border rounded-md border-blue-800 w-[300px] "
        />{" "}
        <br />
        <button
          disabled={loading}
          className=" bg-blue-500 text-white my-3 mr-3 p-3 rounded-md font-light hover:bg-blue-600"
          onClick={generatrQr}
        >
          Generate QR Code
        </button>
        <button
          className=" bg-green-500 text-white my-3 mr-3 p-3 rounded-md font-light hover:bg-green-600"
          onClick={download}
        >
          Download QR Code
        </button>
        <p className=" text-gray-400">
          Designed by{" "}
          <span className=" text-blue-400 cursor-pointer"> K Rajesh</span>
        </p>
      </div>
    </div>
  );
};

export default Code;
