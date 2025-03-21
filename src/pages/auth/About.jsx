import React from "react";
import Image from "../../assets/Images/Header Section.png";
import Image2 from "../../assets/Images/Laptop.png";
import {
  ArrowRight,
  ChartPieIcon,
  HeartCrackIcon,
  Send,
  StarIcon,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
       <Navbar />
      <div className="h-[120vh] relative">
        <div className="flex justify-between items-center bg-[#DDEEFE] h-[60vh] px-16 pt-10 ">
          {/* Left Section - Heading leading tight is the same as line height*/}
          <h1 className="text-5xl font-bold leading-tight w-1/2">
            Ads That Speak, Results That Shine
          </h1>

          {/* Right Section - Text & Button */}
          <div className="w-[35vw] text-left">
            <p className="text-gray-700 mt-5 text-m leading-tight text-xl">
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

        <div className="absolute w-full h-100 overflow-hidden ">
          <img
            src={Image}
            alt="Header Section"
            className="w-full relative bottom-25 "
          />
        </div>
      </div>
      <div className="flex justify-around items-center bg-[#FFFFFF] h-[100vh] p-20">
        <div className=" text-left">
          <img src={Image2} alt="Laptop" className=" h-120" />
        </div>
        <div className="w-1/2">
          <h1 className="text-blue-500 text-l font-bold mb-8 hover:text-blue-800">
            About Us
          </h1>
          <h2 className="text-2xl font-extrabold mb-10 ">
            {" "}
            Elevating Your Style & Beyond
          </h2>
          <p className="text-gray-500">
            {" "}
            We bring you the best in fashion, accessories, kids' essentials, and
            exquisite jewelry—all in one place. Our platform is designed to
            connect buyers and sellers seamlessly, offering a curated selection
            of high-quality products that match your style and needs.
          </p>
          <button className="bg-blue-900 text-white px-6 py-3 flex items-center justify-center gap-2 mt-5 hover:bg-blue-800">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-[#F9FAFB] h-[100vh] p-20">
        <div className="flex justify-around items-center bg-[#FFFFFF] p-10">
          <h1 className="text-3xl font-bold leading-tight w-1/2">
            Bridging Style & Technology for Everyone
          </h1>
          <p className="text-gray-700 mt-5 text-m pl-10 text-l w-1/2">
            Seamless, Accessible, and Engaging. We create digital experiences
            that cater to everyone. Our platform ensures that fashion,
            accessories, kids' essentials, and jewelry are showcased in a way
            that's user-friendly, responsive, and inclusive for all. Elevate
            your brand with solutions that connect and inspire!
          </p>
        </div>
        <div className="grid grid-cols-4  gap-2 justify-around items-center bg-[#FFFFFF] p-10 w-[1205px] m-auto">
          <div className="border-2 p-5 bg-[#FFFFFF]">
            <span className="text-blue-600">
              <Send />
            </span>
            <h1 className="text-2xl font-bold leading-tight mt-5">Branding</h1>
            <p className="text-gray-700 mt-5 text-m">
              Create a lasting impression with a brand that speaks to your
              audience and resonates with your values.
            </p>
          </div>
          <div className="border-2 p-5">
            <span className="text-blue-600">
              <StarIcon />
            </span>
            <h1 className="text-2xl font-bold leading-tight mt-5">
              Development
            </h1>
            <p className="text-gray-700 mt-5 text-m">
              Make your product more eye-catching with a touch of illustration.
            </p>
          </div>
          <div className="border-2 p-5">
            <span className="text-blue-600">
              <ChartPieIcon />
            </span>
            <h1 className="text-2xl font-bold leading-tight mt-5">Marketing</h1>
            <p className="text-gray-700 mt-5 text-m">
              Create a lasting impression with a brand that speaks to your
              audience and resonates with your values.
            </p>
          </div>
          <div className="border-2 p-5">
            <span className="text-blue-600">
              <HeartCrackIcon />
            </span>
            <h1 className="text-2xl font-bold leading-tight mt-5">Strategy</h1>
            <p className="text-gray-700 mt-5 text-m">
              Create a lasting impression with a brand that speaks to your
              audience and resonates with your values.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
