import React from "react";
import { BiCategory } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsCart3, BsPerson } from "react-icons/bs";
function Navbar() {
  return (
    <div className="w-screen h-[80px] bg-blue-500 flex fixed top-0 mb-[100px] items-center justify-between px-4">
      <div className="flex gap-2 items-center mx-4 justify-between">
        <div className="logo w-[50px] h-[50px] rounded-full">
          <img src="https://en.pimg.jp/065/665/280/1/65665280.jpg" alt="" />
        </div>
        <h2 className="text-[30px] font-bold text-white">DiaMart</h2>
      </div>

      

      <div className="mr-4 relative flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 pl-10 py-2 w-[400px] rounded-lg border outline-none focus:ring-2 focus:ring-transparent bg-white text-black z-40"
        />
        <FiSearch className="text-[25px] text-black absolute z-50 left-2" />
      </div>


      <div className="flex gap-4">
        <div className="ml-auto mr-4 cursor-pointer relative flex items-center gap-2 text-white hover:bg-blue-700 hover:p-4 hover:rounded-[36px] transition-all">
          <BiCategory className="text-[25px] text-white z-50 " />
          <h2 className="text-white font-bold">Category</h2>
        </div>

        <div className="ml-auto mr-4 cursor-pointer relative flex items-center gap-2 text-white hover:bg-blue-700 hover:p-4 hover:rounded-[36px] transition-all">
          <BsCart3 className="text-[25px] text-white z-50 " />
          <h2 className="text-white font-bold">My items</h2>
        </div>

        <div className="ml-auto mr-4 cursor-pointer relative flex items-center gap-2 text-white hover:bg-blue-700 hover:p-4 hover:rounded-[36px] transition-all">
          <BsPerson className="text-[25px] text-white z-50 " />
          <h2 className="text-white font-bold">Sign In</h2>
        </div>


      </div>
    </div>
  );
}

export default Navbar;
