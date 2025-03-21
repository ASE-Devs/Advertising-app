import React from "react";
import drEss from "../../assets/pics/dress2.jpg"

const VendorAds = () => {
  return (
    <div>
      <div >
        <h1 className="text-center font-semibold text-4xl underline  ">My Adverts</h1>
      </div>

      <div>
        <div className="grid grid-cols-4 gap-6 w-4/4 mx-auto mt-6 ml-20 mr-20">
          {[
            { title: "Dress", price: " GH₵35.00" },
            { title: "Dress", price: " GH₵35.00" },
            { title: "Dress", price: " GH₵35.00" },
            { title: "Dress", price: " GH₵35.00" },
            { title: "Shoe", price: " GH₵200.00" },
            { title: "Shoe", price: " GH₵200.00" },
            { title: "Shoe", price: " GH₵200.00" },
            { title: "Shoe", price: " GH₵200.00" },
            { title: "Bag", price: " GH₵120.00" },
            { title: "Bag", price: " GH₵120.00" },
            { title: "Bag", price: " GH₵120.00" },
            { title: "Bag", price: " GH₵120.00" },
          ].map((product, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
              <img
                className="w-full h-50 object-cover rounded-md"
                src={drEss}
                alt={product.title}
              />
              <h1 className="mt-2 font-semibold">{product.title}</h1>
              <p className="text-gray-500">{product.price}</p>
              <div className="flex justify-between">
              <button className="text-yellow-300">Edit</button>
              <button className="text-red-500">Delete</button>
              <button className="text-green-500">Publish</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorAds;
