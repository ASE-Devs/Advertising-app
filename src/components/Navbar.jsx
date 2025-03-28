import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center h-16 bg-[#DDEEFE] text-black fixed w-full shadow-sm font-medium z-10">
          <div className="flex items-center pl-10">FamilyBloom</div>
          <div className="px-4 w-1/2 gap-5 flex justify-around items-center ">
            <Link to="/" className="hover:text-[#325799]">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#325799]">
              About
            </Link>
            <Link to="/adverts" className="hover:text-[#325799]">
              Shop
            </Link>
            <Link to="/contact" className="hover:text-[#325799]">
              Contact
            </Link>
            <div className="bg-amber-50 px-5 py-2 rounded-3xl flex items-center gap-2">
              <Link
                to="/login"
                className="hover:text-[#325799] hover:font-semibold hover:text-[18px]"
              >
                Login
              </Link>
              <p>/</p>
              <Link
                to="/signup"
                className="hover:text-[#325799] hover:font-semibold hover:text-[18px]"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
