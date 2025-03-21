import React from "react";
import Image from "../../assets/Images/shopping.jpg";
import Image2 from "../../assets/Images/Earrings.jpg";
import Image3 from "../../assets/Images/Toy.jpg";
import Image4 from "../../assets/Images/Dress.jpeg"; 
import Image5 from "../../assets/Images/Men.jpg";
import Image6 from "../../assets/Images/Laptop.png";
import { ArrowBigRight, GemIcon, ShirtIcon, WatchIcon } from "lucide-react";
import { FaBagShopping, FaChildren } from "react-icons/fa6";



const Landing = () => {
  return (
    <>
      <div>
      <div className="">
      <img src={Image} alt="shopping" className="w-full " />
      <h1>up to 50% off</h1>  
      </div>

      <div className="bg-[#F7F7F7]  justify-around items-center  p-20">
        <h1 className=" text-black text-xl ml-5">Today's</h1>
        <p className="pt-10 text-2xl text-black font-bold">Flash Sales</p>
        <div className="grid grid-cols-4 gap-4 p-4 pt-10">
          <img src={Image2} alt="Earrings" className=" object-cover hover:" />
          <img src={Image3} alt="Toy" className=" object-cover hover:"/>
          <img src={Image4} alt="Dress" className=" object-cover hover:"/>
          <img src={Image5} alt="Men" className=" object-fit hover:"/>
        </div>
        <button className="bg-blue-900 text-white px-6 py-3 rounded-md flex items-center mt-5 ml-100 hover:bg-blue-800"> View All Products</button>
      </div> 
      
      <div className="justify-center items-center p-10">
        <h1 className="text-3xl text-black font-bold pt-10">Browse by Category</h1>
        <div className="grid grid-cols-5 gap-10 justify-around items-center pt-10 m-auto">
          <span className="border-1 p-5"><WatchIcon/><h1 className="pt-5">Watch</h1></span>
          <span className="border-1 p-5"><FaBagShopping/><h2 className="pt-5">Bag</h2></span>
          <span className="border-1 p-5"><ShirtIcon/><h3 className="pt-5">Shirts</h3></span>
          <span className="border-1 p-5"><GemIcon/><h4 className="pt-5">Jewellery</h4></span>
          <span className="border-1 p-5"><FaChildren/><h5 className="pt-5">Dolls</h5></span>
        </div>
      </div>
      
      <div className="flex justify-around items-center bg-[#F7F7F7] h-[100vh] p-20">
              <div className=" text-left">
                <img src={Image6} alt="Laptop" className=" h-120" />
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
                <button className="bg-blue-900 text-white px-6 py-3 flex items-center justify-center gap-2 mt-5 hover:bg-blue-800 rounded-md">
                  More <ArrowBigRight/>
                </button>
              </div>
            </div> 
      </div>

      <div className=" p-20">
        <h1>New Arrivals</h1>
        <div className="grid grid-cols-4 grid-rows-2 p-4 gap-4 pt-10">
          <div className="col-span-2 row-span-2"><img src={Image2} alt="Earrings" className="rounded-lg" /></div>
          <div><img src={Image3} alt="Toy" className="  rounded-lg"/></div>
          <div><img src={Image4} alt="Dress" className="  rounded-lg"/></div>
          <div><img src={Image5} alt="Men" className=" "/></div>
        </div>
      </div>
    </>
  );
};

export default Landing;
