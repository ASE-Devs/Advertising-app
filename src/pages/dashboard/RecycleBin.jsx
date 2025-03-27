import React from "react";

const RecycleBin = () => {
  return (
    <div className="h-screen w-full p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Recycle Bin</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-5 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              className="w-28 h-28 object-cover rounded-lg border"
              src="#"
              alt="Ad"
            />
            
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Restore
            </button>
            <button className="flex items-center text-red-600 border border-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition">
              Delete Permanently
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecycleBin;
