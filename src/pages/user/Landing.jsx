import React from "react";
import Image from "../../assets/Images/Header Section.png";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center bg-[#DDEEFE] h-[60vh] px-16 pt-20  ">
          {/* Left Section - Heading leading tight is the same as line height*/}
          <h1 className="text-5xl font-bold leading-tight w-1/2">
            Ads That Speak, Results That Shine
          </h1>

          {/* Right Section - Text & Button */}
          <div className="w-1/3 text-left">
            <p className="text-gray-700 mt-5 text-sm leading-tight">
              We don’t just create advertisements—we craft compelling messages
              that speak to your audience and drive real engagement.
            </p>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 mt-5 hover:bg-blue-800">
              Getting Started{" "}
              <span>
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="">
          <img src={Image} alt="Header Section" />
        </div>
      </div>
    </>
  );
};

export default Landing;
