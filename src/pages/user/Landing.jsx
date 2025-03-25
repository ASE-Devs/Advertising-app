import React from "react";
import Image from "../../assets/Images/shopping.jpg";
import Image2 from "../../assets/Images/Earrings.jpg";
import Image3 from "../../assets/Images/Toy.jpg";
import Image4 from "../../assets/Images/Dress.jpeg";
import Image5 from "../../assets/Images/Men.jpg";
import Image6 from "../../assets/Images/Laptop.png";
import Image7 from "../../assets/Images/Exchange.jpg";
import { ArrowBigRight, GemIcon, ShirtIcon, WatchIcon } from "lucide-react";
import { FaBagShopping, FaChildren } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FcCustomerSupport } from "react-icons/fc";
import { MdOutlinePolicy } from "react-icons/md";
import ProductCard from "../../components/ProductCard";

const Landing = () => {
  return (
    <>
      <div className="relative w-full text-white">
        {/* Background Image */}
        <img
          src={Image}
          alt="shopping"
          className="w-full h-auto object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-right w-1/2">
          <h1 className="text-5xl font-bold text-black">Up to 30% Off</h1>
          <p className="text-2xl text-black mt-5">
            Limited time offer. Don't miss out!
          </p>

          {/* Shop Now Button */}
          <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Join Us Now
          </button>
        </div>
      </div>

      <div className="flex justify-around items-center bg-white h-[100vh] p-20">
        <div>
          <img
            src={Image7}
            alt="Exchange"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-1/2 pl-10">
          <h1 className="text-blue-800 text-4xl font-bold mb-8">
            Your One-Stop Marketplace!
          </h1>
          <p className="text-2xl font-medium">
            Shop amazing deals or Sell with ease—join a thriving community built
            for buyers and sellers."
          </p>
        </div>
      </div>

      <div className="bg-[#F7F7F7]  justify-around items-center  p-20">
        <h1 className=" text-black text-xl ml-5">Today's</h1>
        <p className="pt-10 text-2xl text-black font-bold">Flash Sales</p>
        <div className="grid grid-cols-4 gap-4 p-4 pt-10">
          <img src={Image2} alt="Earrings" className=" object-cover hover:" />
          <img src={Image3} alt="Toy" className=" object-cover hover:" />
          <img src={Image4} alt="Dress" className=" object-cover hover:" />
          <img src={Image5} alt="Men" className=" object-fit hover:" />
        </div>
        <button className="bg-blue-900 text-white px-6 py-3 rounded-md flex items-center mt-5 ml-100 hover:bg-blue-800">
          {" "}
          View All Products
        </button>
      </div>

      <div className="justify-center items-center p-10">
        <h1 className="text-3xl text-black font-bold pt-10">
          Browse by Category
        </h1>
        <div className="grid grid-cols-5 gap-10 justify-around items-center pt-10 m-auto">
          <span className="border-1 p-5">
            <WatchIcon />
            <h1 className="pt-5">Watch</h1>
          </span>
          <span className="border-1 p-5">
            <FaBagShopping />
            <h2 className="pt-5">Bag</h2>
          </span>
          <span className="border-1 p-5">
            <ShirtIcon />
            <h3 className="pt-5">Shirts</h3>
          </span>
          <span className="border-1 p-5">
            <GemIcon />
            <h4 className="pt-5">Jewellery</h4>
          </span>
          <span className="border-1 p-5">
            <FaChildren />
            <h5 className="pt-5">Dolls</h5>
          </span>
        </div>
      </div>

      <div className="flex justify-around items-center bg-[#F7F7F7] h-[100svh] p-20">
        <div className=" text-left">
          <img src={Image6} alt="Laptop" className=" h-120" />
        </div>
        <div className="w-1/2">
          <h1 className="text-blue-500 text-3xl font-bold mb-8 hover:text-blue-800">
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
          <button className="bg-blue-900 text-white px-6 py-3 flex items-center justify-center gap-2 mt-5 hover:bg-blue-800 rounded-md">
            More <ArrowBigRight />
          </button>
        </div>
      </div>

      <div className=" p-20">
        <h1 className="font-bold text-3xl">New Arrivals</h1>
        <div className="flex flex-wrap gap-4 p-4 pt-10">
          {/* Left Large Image (Spanning Two Rows) */}
          <div className="flex-1 min-w-[50%] flex items-stretch">
            <img
              src={Image2}
              alt="Earrings"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-80"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col flex-1 min-w-[45%] gap-4">
            {/* Top Two Images */}
            <div className="flex gap-4">
              <div className="flex-1">
                <img
                  src={Image3}
                  alt="Toy"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-80"
                />
              </div>
              <div className="flex-1">
                <img
                  src={Image4}
                  alt="Dress"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-80"
                />
              </div>
            </div>

            {/* Bottom Single Image */}
            <div className="flex">
              <img
                src={Image5}
                alt="Men"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-80"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] flex p-20 ">
        <div className=" p-5">
          <h2>
            <TbTruckDelivery className="text-4xl" />
          </h2>
          <h1 className="text-2xl font-bold leading-tight mt-5">Delivery</h1>
          <p className="text-gray-700 mt-5 text-m">
            Get your products delivered to your doorstep in no time.
          </p>
        </div>
        <div className="p-5">
          <h2>
            <FcCustomerSupport className="text-4xl" />
          </h2>
          <h1 className="text-2xl font-bold leading-tight mt-5">
            24/7 Customer Service
          </h1>
          <p className="text-gray-700 mt-5 text-m">
            Have any questions or concerns? Our team is here to help you 24/7.
          </p>
        </div>
        <div className="p-5">
          <h2>
            <MdOutlinePolicy className="text-4xl" />
          </h2>
          <h1 className="text-2xl font-bold leading-tight mt-5">
            {" "}
            Return Policy
          </h1>
          <p className="text-gray-700 mt-5 text-m">
            Not satisfied with your purchase? Return it within 30 days.
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
