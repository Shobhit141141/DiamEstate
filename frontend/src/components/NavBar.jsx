import React from "react";
import { BiCategory } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsCart3, BsPerson } from "react-icons/bs";

function Navbar() {
  return (
    <div className="w-screen h-[80px] bg-blue-500 flex fixed top-0 mb-[100px] items-center justify-between px-4 md:px-8">
      <div className="flex items-center">
        <div className="logo w-12 h-12 md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
          <img
            src="https://en.pimg.jp/065/665/280/1/65665280.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-lg md:text-[30px] font-bold text-white ml-2 md:ml-4 hidden md:block">
          DiaMart
        </h2>
      </div>

      <div className="flex items-center justify-end ml-auto md:ml-0">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 pl-8 py-2 md:px-4 md:pl-10 md:py-2 w-[200px] md:w-[400px] rounded-lg border outline-none focus:ring-2 focus:ring-transparent bg-white text-black z-40 text-sm md:text-base"
          />
          <FiSearch className="text-lg md:text-[25px] text-black absolute left-2 z-50" />
        </div>

        <div className="flex gap-4 ml-4 md:ml-8">
          <div className="relative flex items-center gap-2 text-white hover:bg-blue-700 hover:p-2 md:hover:p-4 hover:rounded-[36px] transition-all">
            <BiCategory className="text-lg md:text-[25px] text-white z-50" />
            <h2 className="text-white font-bold hidden md:block">Category</h2>
          </div>

          <div className="relative flex items-center gap-2 text-white hover:bg-blue-700 hover:p-2 md:hover:p-4 hover:rounded-[36px] transition-all">
            <BsCart3 className="text-lg md:text-[25px] text-white z-50" />
            <h2 className="text-white font-bold hidden md:block">My items</h2>
          </div>

          <div className="relative flex items-center gap-2 text-white hover:bg-blue-700 hover:p-2 md:hover:p-4 hover:rounded-[36px] transition-all">
            <BsPerson className="text-lg md:text-[25px] text-white z-50" />
            <h2 className="text-white font-bold hidden md:block">Sign In</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
