import React from "react";
import { Undo, Trash2 } from "lucide-react";

const RecycleBin = ({ deletedAds = [] }) => {
  return (
    <div className="h-screen w-full p-8 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Recycle Bin</h1>

      {deletedAds.length === 0 ? (
        <p className="text-gray-500">No deleted adverts.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deletedAds.map((ad) => (
            <div
              key={ad.id}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div className="flex items-center">
                {ad.image && (
                  <img
                    className="w-28 h-28 object-cover rounded-md"
                    src={ad.image}
                    alt={ad.title}
                  />
                )}
                <div className="ml-4">
                  <p className="text-lg font-semibold">{ad.title}</p>
                  <p className="text-black">{ad.price}</p>
                  {ad.category && (
                    <p className="text-sm text-gray-400 font-semibold">
                      {ad.category}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center text-blue-500 border border-blue-500 px-3 py-1 rounded-md">
                  <Undo size={16} className="mr-1" /> Restore
                </button>
                <button className="flex items-center text-red-500 border border-red-500 px-3 py-1 rounded-md">
                  <Trash2 size={16} className="mr-1" /> Delete Permanently
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecycleBin;
