import React, { useState } from "react";
import Carousel from "../components/Carousel";

const imageList = [
  {
    id: 1,
    image:
      "https://www.wilsonhomes.com.au/sites/default/files/styles/blog_hero_banner/public/My%20project%20-%202023-06-20T095818.329%20%281%29_0.jpg?itok=UbtVbhT0",
    title: "Slide 1",
    description: "This is the description for slide 1",
  },
  {
    id: 2,
    image:
      "https://www.wilsonhomes.com.au/sites/default/files/styles/blog_hero_banner/public/My%20project%20-%202023-06-20T095818.329%20%281%29_0.jpg?itok=UbtVbhT0",
    title: "Slide 2",
    description: "This is the description for slide 2",
  },
  {
    id: 3,
    image:
      "https://images.adsttc.com/media/images/6077/43aa/ebb5/fc01/6543/b86b/newsletter/fi-img-1234.jpg?1618428850",
    title: "Slide 3",
    description: "This is the description for slide 3",
  },
];

const BuyingPage = () => {
  const totalPropertyPrice = 200;
  const totalTokens = 10;
  const tokenPrice = totalPropertyPrice / totalTokens;
  const [tokenCount, setTokenCount] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleTokenChange = (e) => {
    const value = Math.max(
      0,
      Math.min(totalTokens, parseInt(e.target.value) || 0)
    );
    setTokenCount(value);
    setPercentage((value / totalTokens) * 100);
  };

  return (
    <div className="mt-[80px] gap-3 flex flex-wrap w-screen h-auto overflow-y-hidden p-4">
      <Carousel images={imageList} numImages={3} className="w-full md:w-1/2" />

      <div className="bg-gradient-to-r buyingbox from-slate-200 to-stone-300 w-full md:w-[45vw] h-min rounded-2xl flex flex-col p-2 shadow-md">
        <div className="bg-white p-4 flex flex-col gap-2 rounded-2xl">
          <h3 className="text-2xl font-bold text-center text-black mb-2">
            MAKE INVESTMENT
          </h3>
          <h4 className="text-lg text-center font-semibold text-gray-800 mb-4">
            (Buying using tokens)
          </h4>
          <p className="text-gray-700">
            <strong>Name of Token:</strong> ExampleToken
          </p>
          <p className="text-gray-700">
            <strong>Total Tokens:</strong> {totalTokens}
          </p>
          <p className="text-gray-700">
            <strong>Property Price:</strong> $
            {totalPropertyPrice.toLocaleString()}
          </p>
          <p className="text-gray-700">
            <strong>Token Price:</strong> ${tokenPrice.toLocaleString()}
          </p>
          <p className="text-gray-700">
            <strong>Tokens Left:</strong> {"(from backend)"}
          </p>
          <p className="text-gray-700">
            <strong>Tokens Left After Transaction:</strong>{" "}
            {totalTokens - tokenCount}
          </p>
        </div>
        <div className="flex flex-col pt-3 px-1 gap-1">
          <h3 className=" text-black ">Number of Tokens to Buy</h3>
          <input
            type="number"
            min="0"
            max={totalTokens}
            value={tokenCount}
            onChange={handleTokenChange}
            className="border-2 bg-white border-white text-slate-800 font-mono font-medium rounded-md p-2"
            placeholder="Enter number of tokens to buy"
          />

          <h3 className="mt-2 text-black ">Property Percentage </h3>
          <input
            type="text"
            value={`${percentage.toFixed(2)}%`}
            readOnly
            className="border bg-white border-white text-slate-800 font-mono font-medium rounded-md p-2"
            placeholder="Percentage of property"
          />
          <button className="text-white mt-4 font-medium text-xl px-4 py-3 bg-[#7065F0] hover:bg-[#d7d4fc] hover:px-4 hover:py-3 rounded-[10px] hover:text-[#7065F0] transition-all">
            <h1>BUY</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyingPage;
