import React from "react";
import { Search, Bell } from "lucide-react";

const DashBar = () => {
  return (
    <div className="bg-[#5575F2] text-white p-4 flex flex-wrap justify-between items-center">
      <div className="flex items-center w-full md:w-2/3 mb-2 md:mb-0 bg-white p-2 rounded border border-gray-900">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent text-black outline-none w-full md:w-auto"
        />
        <Search className="text-gray-500 w-5 h-5 mr-2" />
      </div>

      <div className="flex items-center space-x-4 w-full md:w-auto justify-end">
        <Bell className="w-6 h-6 cursor-pointer" />
        <div className="bg-white text-black px-2 py-1 rounded-full text-sm">
          Vendor Name
        </div>
      </div>
    </div>
  );
};

export default DashBar;
