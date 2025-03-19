import React from "react";

const VendorAds = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Ads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example ad UI (can be removed once backend data is connected) */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <h3 className="text-lg font-medium mt-2 text-gray-700">Ad Title</h3>
        </div>

        {/* Repeat placeholder ads as needed */}
      </div>
    </div>
  );
};

export default VendorAds;
