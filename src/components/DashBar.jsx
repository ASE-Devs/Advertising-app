import React from "react";
import { SearchIcon, MessageCircleIcon, BellDot } from "lucide-react";
import Image from "../assets/pics/profile3.jpg";
import CreateAd from "../pages/dashboard/CreateAd";
import { Link } from "react-router";

const DashBar = () => {
  return (
    <div className=" bg-[#DDEEFE] w-full pt-2">
      <nav className="flex justify-between items-center ">
        <div className="pl-5">
          <span className=" text-black font-semibold">FamilyBloom</span>
        </div>
        <div className="flex border-1 w-[500px] h-[35px] items-center justify-center border-gray-400 rounded-[8px]">
          <SearchIcon className="h-[16px] text-gray-400 pl-2"></SearchIcon>
          <input
            type="text"
            className="w-[500px] h-[35px] pl-2 outline-none"
            placeholder="Search for product"
          />
        </div>
        <div className="flex justify-around w-[25vw] pr-5 items-center">
          <Link to="/dashboard/create-ad"
            className="bg-[#193CB8] px-3 py-2 rounded-xl text-white inline-block"
          >
            + Add Product
          </Link>

          <MessageCircleIcon className=""></MessageCircleIcon>
          <BellDot />
          <div className="h-10 overflow-hidden ">
          <img
  src={Image}
  alt="Profile"
  className="w-10 h-10 mb-0 mt-0 rounded-full object-cover border-4 border-white shadow-md"
/>


          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashBar;
