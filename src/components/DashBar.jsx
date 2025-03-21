import React from "react";
import { Search, Bell, MessageCircleMore } from "lucide-react";
import image from "../assets/pics/profile.jpg";

const DashBar = () => {
  return (
    <div className=" bg-white w-6xl pt-2 ">
      <nav className="flex flex-row justify-around">
        <div>
          <img src="" alt="Logo goes here" />
        </div>

        <div className=" flex gap-1  border-2 rounded-4xl p-2 pb-1 w-96">
          <div>
            <Search />
          </div>
          <input type="text" placeholder="Search" />
        </div>

        <div className=" flex justify-evenly gap-10">
          <button className="bg-[#5575F2] text-white font-semibold rounded-[2vh] p-1.5 hover:bg-blue-800">
            + add product
          </button>

<div >
<select>
          <MessageCircleMore />
          <option value=""></option>
        </select>

</div>
         

        
          <span>
            <Bell />
          </span>
          <div className="">
            <img src="{img}" alt="{image}" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashBar;
