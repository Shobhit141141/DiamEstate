import React from "react";
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

const DetailsPage = () => {
  return (
    <div className="mt-[80px] gap-3 flex flex-wrap w-screen h-auto overflow-y-hidden p-4">
      <Carousel images={imageList} numImages={3} className="w-full md:w-1/2" />

      <div className="bg-gradient-to-r from-slate-200 to-stone-300 w-full md:w-[45vw] h-min rounded-2xl flex flex-col p-2 shadow-md">
        <div className="bg-white p-4 flex flex-col gap-4 rounded-2xl">
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
        <div className="flex justify-center p-2">
          <button className="text-white font-medium text-xl px-4 py-3 bg-[#7065F0] hover:bg-[#d7d4fc] hover:px-4 hover:py-3 rounded-[10px] hover:text-[#7065F0] transition-all">
            <h1>INVEST NOW</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
