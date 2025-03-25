import React from "react";
import { SearchIcon, MessageCircleIcon, BellDot } from "lucide-react";
import Image from "../assets/pics/profile.jpg";

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
          <button
            type="submit"
            className="bg-[#193CB8] px-3 py-2 rounded-xl text-white"
          >
            {" "}
            + Add Product
          </button>
          <MessageCircleIcon className=""></MessageCircleIcon>
          <BellDot />
          <div className="h-10 overflow-hidden ">
            <img
              src={Image}
              alt=""
              className="rounded-full w-full h-full relative object-cover border-white shadow-md"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashBar;
