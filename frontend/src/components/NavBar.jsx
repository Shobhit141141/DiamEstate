import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { BsHouseDash } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { RiAccountPinCircleLine } from "react-icons/ri";

const navbarItems = [
  {
    icon: <MdOutlineAddHomeWork className="text-lg md:text-[25px] z-50" />,
    label: "Buy",
    link: "/properties",
  },
  {
    icon: <BsHouseDash className="text-lg md:text-[25px] z-50" />,
    label: "Sell",
    link: "/listing",
  },
  {
    icon: <RiAccountPinCircleLine className="text-lg md:text-[25px] z-50" />,
    label: "Profile",
    link: "/dashboard",
  },
];

function Navbar() {
  const location = useLocation();
  const [selected, setSelected] = useState("");

  if (location.pathname === "/login") {
    return null;
  }

  const handleItemClick = (label) => {
    if (label === "Buy" || label === "Sell") {
      setSelected(label);
    }
  };

  return (
    <div className="w-screen h-[80px] flex fixed top-0 mb-[100px] items-center justify-between px-4 md:px-8 backdrop-blur">
      <Link to={"/"}>
        <div className="flex items-center">
          <div className="logo w-12 h-12 md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
            <img
              src="https://en.pimg.jp/065/665/280/1/65665280.jpg"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg md:text-[25px] font-bold text-[#7065F0] ml-2 md:ml-4 hidden md:block overflow-hidden">
            DiamEstate
          </h2>
        </div>
      </Link>

      <div className="flex items-center justify-center ml-auto md:ml-0">
        <div className="flex gap-4 ml-4 md:ml-8">
          {navbarItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <div
                onClick={() => handleItemClick(item.label)}
                className={`relative flex items-center gap-2 text-black md:px-4 md:py-2 bg-transparent hover:bg-[#d7d4fc] hover:p-2 md:hover:px-4 md:hover:py-3 hover:rounded-[10px] hover:text-[#6559f1] transition-all cursor-pointer ${
                  (item.label === "Buy" || item.label === "Sell") &&
                  selected === item.label
                    ? "bg-[#d7d4fc] p-2 md:px-4 md:py-3 rounded-[10px] text-[#6559f1] transition-all"
                    : ""
                }`}
              >
                {item.icon}
                <h2 className="font-bold hidden md:block">{item.label}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-3 items-center ml-2">
        <Link to={"/login"}>
          <div className="relative flex items-center gap-2 text-white md:px-4 md:py-3 bg-[#7065F0] hover:bg-[#d7d4fc] hover:p-2 md:hover:px-4 md:hover:py-3 rounded-[10px] hover:text-[#7065F0] transition-all cursor-pointer">
            <FiLogOut className="text-lg md:text-[25px] z-50" />
            <h2 className="font-bold hidden md:block">Logout </h2>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Navbar;
