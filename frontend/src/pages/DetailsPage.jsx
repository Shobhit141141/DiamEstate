import React from "react";
import Carousel from "../components/Carousel";

const DetailsPage = () => {
  return (
    <div className=" mt-[80px] gap-3 flex flex-wrap w-screen h-[88vh] bg-stone-200 overflow-y-hidden p-4">
      <Carousel />

      <div className="bg-gradient-to-r from-purple-500 to-emerald-400 my-8 w-[45vw] h-min rounded-2xl flex flex-col p-2 shadow-md">
        <div className=" bg-slate-200 p-4 flex flex-col gap-4  rounded-2xl ">
          <h3 className="text-xl font-bold text-black mb-2">
            Property Details
          </h3>
          <p className="text-gray-700">
            <strong>Price:</strong> $500,000
          </p>
          <p className="text-gray-700">
            <strong>Fraction Left:</strong> 1/10
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 1234 Property Lane, City, State
          </p>
          <p className="text-gray-700">
            <strong>Pincode:</strong> 110002
          </p>
          <p className="text-gray-700">
            <strong>Review:</strong> ⭐⭐⭐⭐☆
          </p>
        </div>
        <div className="flex justify-center p-2 " >
          <button className=" text-white font-medium text-xl md:px-4 md:py-3 bg-[#2046a0] hover:bg-[#d7d4fc] hover:p-2 md:hover:px-4 md:hover:py-3 rounded-[10px] hover:text-[#7065F0] transition-all ">
            <h1>INVEST NOW</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
