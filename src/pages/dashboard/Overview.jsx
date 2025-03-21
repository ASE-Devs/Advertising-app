import React from "react";
import Bg from "../../assets/pics/profile.jpg";
import { Facebook, LucideYoutube, Twitter } from "lucide-react";

const Overview = () => {
  return (
    <div>
      <div className="flex items-center flex-col h-80 p-32 bg-[#5575F2] font-semibold">
        <h1 className="text-2xl">Replace cover image</h1>
        <div className="flex justify-between gap-6 p-3.5">
          <button className="hover:text-[#5575F2]">Remove</button>
          <button className="bg-yellow-100 rounded-2xl p-1.5">
            Edit Cover
          </button>
          <div class="bg-[url(/pics/profile.jpg)] ..."></div>
        </div>
      </div>

      {/* SECOND SECTION */}

      <div className=" shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);  rounded-4xl  h-60 pt-6 ml-20 mr-20">
        <div className=" flex  flex-row gap-15 justify-evenly">
          <div className="flex flex-row ">
            <img
              className=" border-2 rounded-full w-20 p-3"
              src="#"
              alt="profile image"
            />
            <span className="p-6">
              <h1 className="font-extrabold text-2xl">Anthony Kwame</h1>
              <p className="text-gray-400 font-semibold">
                Dream Big. Great Sales
              </p>
            </span>
          </div>

          <div className="flex flex-row  justify-evenly gap-4 pt-8 ml-56 ">
            <span>
              <Facebook />
            </span>

            <span>
              <Twitter />
            </span>

            <span>
              <LucideYoutube />
            </span>
            <div className="-mt-2.5">
              <button className="p-2 relative border-1 font-semibold  hover:text-blue-400 rounded-full">
                Edit here
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="flex flex-row  gap-6 ml-40 mr-40 absolute mt-0 font-extrabold">
          <h1>Products</h1>
          <h1>Following</h1>
          <h1>Products</h1>

          <select className="ml-96">
            <option value="Latest">Latest</option>
            <option value="Products">Products</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        {/* GRID SECTION */}

        <div class="grid grid-cols-3 gap-20 items-center w-60 ml-40 mt-6 absolute m-72 ">
          <div className="shadow-amber-600 text-amber-200 border-2 w-40">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            </h1>
          </div>

          <div className="shadow-amber-600 text-green-500 border-2 w-40 ">
            <h1>Lorem</h1>
          </div>

          <div className="shadow-amber-600 text-red-600 border-2 w-40">
          <h1>
            Lorem ipsum dolor 
          </h1>
        </div>

        <div className="shadow-amber-600 text-amber-200 border-2 w-40">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            </h1>
          </div>

          <div className="shadow-amber-600 text-green-500 border-2 w-40">
            <h1>Lorem</h1>
          </div>

          <div className="shadow-amber-600 text-red-600 border-2 w-40">
          <h1>
            Lorem ipsum dolor 
          </h1>
        </div>
        </div>

        
      </section>
    </div>
  );
};

export default Overview;
