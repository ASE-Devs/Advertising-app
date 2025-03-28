import React, { useEffect, useState } from "react";
import Image from "../../assets/pics/bg-overview2.jpg";
import proFile from "../../assets/pics/profile3.jpg";
import { Facebook, LucideYoutube, Twitter } from "lucide-react";
import { Link } from "react-router";
import { apiGetVendorAdverts } from "../../services/adverts";

const Overview = () => {
  const [adverts, setAdverts] = useState([]);
  const imageURL = "https://res.cloudinary.com/dui8hhbha/image/upload/";

  const getAds = async () => {
    try {
      const response = await apiGetVendorAdverts();
      setAdverts(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div className="bg-gray-100 h-screen w-full pl-20 pr-10">
      <div className="container mx-auto p-0">
        <div
          className="relative flex flex-col items-center justify-center h-64 w-full bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${Image})` }}
        ></div>
      </div>

      <div className="relative -top-12 mx-auto w-3/4 bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-20 h-20 border-4 border-white shadow-md object-cover"
            src={proFile}
            alt="Profile"
          />

          <div>
            <h1 className="text-xl font-bold">Regina Yeboah</h1>
            <p className="text-gray-500">
              Envision greatness. Embrace innovation!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Facebook className="text-gray-500 hover:text-blue-500" />
          <Twitter className="text-gray-500 hover:text-blue-500" />
          <LucideYoutube className="text-gray-500 hover:text-blue-500" />

          <Link to="/dashboard/profile">
            <button className="border px-4 py-1 rounded-lg bg-[#193CB8] text-white hover:bg-blue-700 transition duration-300">
              Edit profile
            </button>
          </Link>
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

      <div className="grid grid-cols-3 gap-6 w-3/4 mx-auto mt-6">
        {adverts.length > 0 ? (
          adverts.map((ad, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
              <img
                className="w-full h-50 object-cover rounded-md"
                src={`${imageURL}${ad.pictures[0]}`}
                alt={ad.name}
              />
              <div className="p-4 bg-white shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl">
                <h1 className="text-lg font-bold text-black">{ad.name}</h1>
                <p className="text-l font-semibold text-[#073180] mt-1">
                  GH₵ {ad.price}
                </p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {ad.description}
                </p>

                <span className="inline-block mt-3 bg-[#DDEEFE] text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                  {ad.quantity} in stock
                </span>
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Overview;
