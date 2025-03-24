import React from "react";
import { SearchIcon, MessageCircleIcon, BellDot } from "lucide-react";
import Image from "../assets/pics/profile.jpg";

const DashBar = () => {
  return (
    <div className=" bg-white w-full pt-2 ">
      {/* <nav className=" ">
        <div>Logo here</div>

        <div className=" flex gap-1  border-2 rounded-4xl p-2 pb-1 w-96">
          <div>
            <Search />
          </div>
          <input type="text" placeholder="Search" />
        </div>

        <div className=" flex justify-around ">
          <button className="bg-[#5575F2] text-white font-semibold rounded-[2vh] p-1.5 hover:bg-blue-800">
            + add product
          </button>

          <div>
            <select>
              <MessageCircleMore />
              <option value=""></option>
            </select>
          </div>

          <span>
            <Bell />
          </span>
          <div className="bg-cover w-[8%]">
            <img
              className="rounded-full w-full"
              src={Image}
              alt="profile.jpg"
            />
          </div>
        </div>
      </nav> */}
      <nav className="flex justify-between items-center">
        <div className="pl-5">Logo here</div>
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
            className="bg-blue-900 px-3 py-2 rounded-xl text-white"
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
              className="rounded-[50%] w-full h-full relative object-cover"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashBar;
