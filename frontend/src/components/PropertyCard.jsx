import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ product }) {
  return (
    <div className="product-card bg-white w-[300px] h-fit rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4">
      <img
        src={product.image}
        alt="Product"
        className="w-full h-48 object-cover mb-4 rounded-2xl"
      />
      <div className="flex justify-between p-2 items-center">
        <div className="flex flex-col my-auto">
          <h3 className="text-[20px] font-semibold text-gray-800 mb-2">
            {product.name}
          </h3>

          <p className="text-black">{product.price}</p>
        </div>

        <div
          className="radial-progress text-[#1e7127] w-[50px] h-[50px] font-bold"
          style={{
            "--value": `${product.percentageLeft}`,
            "--size": "12rem",
            "--thickness": "4px",
          }}
          role="progressbar"
        >
          {product.percentageLeft}
        </div>
      </div>
      <Link to={"/details"}>
        <button className="btn btn-primary mt-4 w-full">Buy Now</button>
      </Link>
    </div>
  );
}

export default PropertyCard;
