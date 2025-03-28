import React from "react";
import Image from "../../assets/Images/Header Section.png";
import Image2 from "../../assets/Images/Laptop.png";
import Image3 from "../../assets/Images/Cookies.png";
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
      <div className="bg-[#F9FAFB]  p-20">
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
        <div className="w-[1200px] m-auto">
          <div className="grid grid-cols-4 gap-5 bg-[#FFFFFF] p-10 w-full">
            <div className="border-2 p-5 bg-[#FFFFFF]">
              <Send className="text-blue-600 w-10 h-10" />
              <h1 className="text-2xl font-bold leading-tight mt-5">
                Branding
              </h1>
              <p className="text-gray-700 mt-5 text-m">
                We craft a compelling brand identity that captivates your
                audience and leaves a lasting impact.
              </p>
            </div>
            <div className="border-2 p-5">
              <StarIcon className="text-yellow-500 w-10 h-10" />
              <h1 className="text-2xl font-bold leading-tight mt-5">
                Development
              </h1>
              <p className="text-gray-700 mt-5 text-m">
                Transform your vision into reality with cutting-edge development
                and seamless user experiences.
              </p>
            </div>
            <div className="border-2 p-5">
              <ChartPieIcon className="text-green-500 w-10 h-10" />
              <h1 className="text-2xl font-bold leading-tight mt-5">
                Marketing
              </h1>
              <p className="text-gray-700 mt-5 text-m">
                Maximize your brand's reach with data-driven marketing
                strategies that engage and convert.
              </p>
            </div>
            <div className="border-2 p-5">
              <HeartCrackIcon className="text-red-500 w-10 h-10" />
              <h1 className="text-2xl font-bold leading-tight mt-5">
                Strategy
              </h1>
              <p className="text-gray-700 mt-5 text-m">
                Drive success with strategic planning that aligns your goals
                with market opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex p-20 gap-5 justify-around items-center">
        <div>
          <img src={Image3} alt="Cookies" />
        </div>
        <div className="w-1/2">
          <span className="text-black">
            <h1 className="text-2xl font-bold pt-3">Our Values</h1>
            <p className="text-sm pt-2">
              Our values are the foundation of our company. They guide our
              decisions and actions, ensuring we create a seamless, reliable,
              and user-friendly advertising platform.
            </p>
          </span>
          <span className="text-black ">
            <h1 className="text-2xl font-bold pt-3">Collaborative</h1>
            <p className="text-sm pt-2">
              Our platform encourages seamless interactions, making it easy for
              users to communicate, negotiate, and complete transactions
              effortlessly.
            </p>
          </span>
          <span className="text-black">
            <h1 className="text-2xl font-bold pt-3">Trusted</h1>
            <p className="text-sm pt-2">
              Trust is at the heart of our platform. We prioritize security,
              transparency, and reliability to ensure a safe marketplace for all
              users. We create a trustworthy environment where people can
              confidently buy and sell.
            </p>
          </span>
          <span className="text-black">
            <h1 className="text-2xl font-bold pt-3">Focused</h1>
            <p className="text-sm pt-2">
              Our platform is designed to help users find what they need
              quickly, with smart filtering options and an intuitive interface.
              We stay focused on delivering high-quality ads and a seamless
              browsing experience, ensuring every interaction adds value.
            </p>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
