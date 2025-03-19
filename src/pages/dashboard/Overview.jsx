import React from 'react'

const Overview = () => {
  return (
    <div className="p-15 bg-gray-100 h-screen w-screen ">

    {/* Header */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">My adverts</h2>
      <div className="flex items-center mt-2 text-green-600">
        {/* <span className="text-lg">✔</span>
        <span className="ml-2">1 Closed</span> */}
      </div>
    </div>

    {/* Category Filter */}
    {/* <div className="mt-4">
      <select className="p-2 border rounded-md shadow-sm">
        <option>Category</option>
      </select>
    </div> */}

    {/* Adverts List */}
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
      {/* Ad Card */}
      <div className="flex items-start space-x-4">
        <img
          src="https://via.placeholder.com/100" // Replace with real image
          alt="Product"
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg">GH₵ 5</h3>
          <p className="font-medium">Affordable Powerful Generator </p>
          <p className="text-gray-500 text-sm">Active · Created 03/12/2023</p>

          

          {/* Actions */}
          <div className="mt-4 flex items-center space-x-4">
            <button className="text-green-600 font-medium">Edit</button>
            <button className="text-red-500 font-medium">Delete</button>
            <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

 
export default Overview