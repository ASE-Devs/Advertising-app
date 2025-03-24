import React from "react";
import Image from "../../assets/pics/bg-overview.jpg";
import proFile from "../../assets/pics/profile.jpg";
import { Facebook, LucideYoutube, Twitter } from "lucide-react";

const Overview = () => {
  return (
    <div className="bg-gray-100 h-screen w-full pl-20 pr-10  ">
      {/* The First Section of the Pag*/}
      <div
        className="relative flex flex-col items-center justify-center h-64 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>

      <div className="relative -top-12 mx-auto w-3/4 bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-20 h-20 border-4 border-white shadow-md"
            src={proFile}
            alt="Profile"
          />
          <div>
            <h1 className="text-xl font-bold">Customer Name</h1>
            <p className="text-gray-500">
              Envision greatness. Embrace innovation!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Facebook className="text-gray-500 hover:text-blue-500" />
          <Twitter className="text-gray-500 hover:text-blue-500" />
          <LucideYoutube className="text-gray-500 hover:text-blue-500" />
          <button className="border px-4 py-1 rounded-lg hover:text-blue-500">
            Edit profile
          </button>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-3 flex justify-between border-b pb-1">
        <div className="flex gap-6 font-semibold">
          <button className="text-gray-500 hover:text-blue-500">
            All Products
          </button>
        </div>
        <select className="border px-2 py-1 rounded">
          <option>Latest</option>
          <option>Popular</option>
        </select>
      </div>

      {/* Mapping  of items*/}
      <div className="grid grid-cols-3 gap-6 w-3/4 mx-auto mt-6">
        {[
          { title: "Dress", price: " GH₵35.00" },
          { title: "Dress", price: " GH₵35.00" },
          { title: "Dress", price: " GH₵35.00" },
          { title: "Shoe", price: " GH₵200.00" },
          { title: "Shoe", price: " GH₵200.00" },
          { title: "Shoe", price: " GH₵200.00" },
          { title: "Bag", price: " GH₵120.00" },
          { title: "Bag", price: " GH₵120.00" },
          { title: "Bag", price: " GH₵120.00" },
        ].map((product, index) => (
          <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
            <img
              className="w-full h-50 object-cover rounded-md"
              src={Image}
              alt={product.title}
            />
            <h1 className="mt-2 font-semibold">{product.title}</h1>
            <p className="text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
