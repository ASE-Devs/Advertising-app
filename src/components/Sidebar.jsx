import React from "react";
import K from "../constants";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className=" flex flex-col w-60 gap-y-6 bg-[#5575F2] h-screen px-2 py-4 fixed top-0 left-0">
      <span>Logo Here</span>
      <div className=" flex flex-col gap-y-6">
        {K.NAVLINKS.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              className="text-white font-bold text-2xl hover:bg-black px-3 py-2 w-full rounded-md flex gap-x-2 items-center"
            >
              <link.icon className="w-6 h-6" />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div>
      <button className="mt-auto">Logout</button>
    </div>
  );
};

export default Sidebar;
