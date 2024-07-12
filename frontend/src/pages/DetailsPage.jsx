import React from "react";
import Carousel from "../components/Carousel";

const DetailsPage = () => {
  return (
    <div className=" mt-[80px] gap-3 flex w-screen h-[88vh] bg-emerald-400 overflow-y-auto p-4">
      <Carousel />

      <div className=" my-8  rounded-2xl">
        <div className="bg-white flex flex-col p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2">Property Details</h3>
          <p className="text-gray-700">
            <strong>Price:</strong> $500,000
          </p>
          <p className="text-gray-700">
            <strong>Fraction:</strong> 1/10
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 1234 Property Lane, City, State
          </p>
          
          <p className="text-gray-700">
            <strong>% Left:</strong> 20%
          </p>
          <p className="text-gray-700">
            <strong>Reviews:</strong> ⭐⭐⭐⭐☆
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
