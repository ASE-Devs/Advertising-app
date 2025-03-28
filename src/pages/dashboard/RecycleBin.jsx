import React, { useEffect, useState } from "react";
import { apiGetDeletedAdverts, apiRestoreAdvert, apiDeleteVendorAdvertById } from "../../services/adverts";
import toast from "react-hot-toast";

const RecycleBin = () => {
  const [deletedAds, setDeletedAds] = useState([]);
  const imageURL = "https://res.cloudinary.com/dui8hhbha/image/upload/";

 
  useEffect(() => {
    const fetchDeletedAds = async () => {
      try {
        const response = await apiGetDeletedAdverts();
        setDeletedAds(response.data.data); 
      } catch (error) {
        toast.error("Failed to fetch deleted adverts");
        console.error("Error fetching deleted adverts:", error);
      }
    };

    fetchDeletedAds();
  }, []);


  const handleRestore = async (id) => {
    if (window.confirm("Are you sure you want to restore this advert?")) {
      try {
        await apiRestoreAdvert(id);
        setDeletedAds((prevAds) => prevAds.filter((ad) => ad.id !== id)); 
        toast.success("Advert restored successfully!");
      } catch (error) {
        toast.error("Failed to restore advert");
        console.error("Error restoring advert:", error);
      }
    }
  };

 
  const handlePermanentDelete = async (id) => {
    if (window.confirm("This action is irreversible. Do you want to proceed?")) {
      try {
        await apiDeleteVendorAdvertById(id);
        setDeletedAds((prevAds) => prevAds.filter((ad) => ad.id !== id)); 
        toast.success("Advert deleted permanently!");
      } catch (error) {
        toast.error("Failed to delete advert");
        console.error("Error deleting advert permanently:", error);
      }
    }
  };

  return (
    <div className="h-screen w-full p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Recycle Bin</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {deletedAds.length > 0 ? (
          deletedAds.map((ad) => (
            <div key={ad.id} className="bg-white shadow-lg rounded-xl p-5 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-28 h-28 object-cover rounded-lg border"
                  src={`${imageURL}${ad.pictures[0]}`} 
                  alt={ad.name} 
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{ad.name}</h2>
                  <p className="text-gray-500">{ad.category}</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleRestore(ad.id)}
                  className="flex items-center text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  Restore
                </button>
                <button
                  onClick={() => handlePermanentDelete(ad.id)}
                  className="flex items-center text-red-600 border border-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                >
                  Delete Permanently
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No deleted adverts found.</p>
        )}
      </div>
    </div>
  );
};

export default RecycleBin;