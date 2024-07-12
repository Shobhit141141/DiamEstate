import React from "react";
import { BiCategory, BiLogOut } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsCart3, BsPerson } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const navbarItems = [
  {
    // icon: <img src="/real-estate.png" className="w-[18px] md:w-[30px] z-50" />,
    label: "Buy",
  },
  {
    icon: <BiCategory className="text-lg md:text-[25px] z-50" />,
    label: "Sell",
  },
  {
    icon: <BiCategory className="text-lg md:text-[25px] z-50" />,
    label: "Category",
  },
  {
    icon: <BsCart3 className="text-lg md:text-[25px] z-50" />,
    label: "My items",
  },
  // {
  //   icon: <BsPerson className="text-lg md:text-[25px] z-50" />,
  //   label: "Sign In",
  // },
];

function Navbar() {
  const location = useLocation();
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <div className="w-screen h-[80px] flex fixed top-0 mb-[100px] items-center justify-between px-4 md:px-8 backdrop-blur">
      <Link to={"/"}>
        <div className="flex items-center">
          <div className="logo w-12 h-12 md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
            <img
              src="https://en.pimg.jp/065/665/280/1/65665280.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg md:text-[25px] font-bold text-[#7065F0] ml-2 md:ml-4 hidden md:block overflow-hidden">
            DiaMart
          </h2>
        </div>
      </Link>

      <div className="flex items-center justify-center ml-auto md:ml-0">
        {/* <div className="relative flex items-center ml-[40px]">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 pl-8 py-2 md:px-4 md:pl-10 md:py-2 w-[200px] md:w-[400px] rounded-lg border outline-none focus:ring-2 focus:ring-transparent bg-white text-black z-40 text-sm md:text-base"
          />
          <FiSearch className="text-lg md:text-[25px] text-black absolute left-2 z-50" />
        </div> */}

        <div className="flex gap-4 ml-4 md:ml-8">
          {navbarItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center gap-2 text-black md:px-4 md:py-2 bg-transparent hover:bg-[#d7d4fc] hover:p-2 md:hover:px-4 md:hover:py-3 hover:rounded-[10px] hover:text-[#6559f1] transition-all cursor-pointer"
            >
              {item.icon}
              <h2 className="font-bold hidden md:block">{item.label}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Link to={"/login"}>
          <div className="relative flex items-center gap-2 text-white md:px-4 md:py-3 bg-[#7065F0] hover:bg-[#d7d4fc] hover:p-2 md:hover:px-4 md:hover:py-3 rounded-[10px] hover:text-[#7065F0] transition-all cursor-pointer">
            <BsPerson className="text-lg md:text-[25px] z-50" />
            <h2 className="font-bold hidden md:block">SignIn</h2>
          </div>
        </Link>

        <div className="w-[50px] h-[50px] rounded-full bg-[#7065F0]">
          <img
            src="https://wallpapers-clan.com/wp-content/uploads/2022/08/meme-gif-pfp-18.gif"
            alt="img"
            srcset=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
