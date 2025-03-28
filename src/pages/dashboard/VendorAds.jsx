import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import EditDeleteButtons from "../../components/EditDeleteButtons";
import {
  apiGetVendorAdverts,
  apiDeleteVendorAdvertById,
} from "../../services/adverts";

const categories = [
  "All Categories",
  "fashion and accessories",
  "beauty products",
  "kids and toys",
];

const VendorAds = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageURL = "https://res.cloudinary.com/dui8hhbha/image/upload/";

  useEffect(() => {
    const getAds = async () => {
      setLoading(true);
      try {
        const response = await apiGetVendorAdverts();
        console.log("Fetched Adverts:", response.data.data);
        setAdverts(response.data.data);
      } catch (error) {
        toast.error("Failed to fetch adverts");
        console.error("Error fetching adverts:", error);
      } finally {
        setLoading(false);
      }
    };
    getAds();
  }, []);

  const filteredAds =
    selectedCategory === "All Categories"
      ? adverts
      : adverts.filter((ad) => ad.category === selectedCategory);

  const handleEdit = (ad) => {
    localStorage.removeItem("selectedAd");
    const formattedAd = { ...ad, id: ad._id || ad.id };
    localStorage.setItem("selectedAd", JSON.stringify(formattedAd));
    navigate("../edit-ad");
  };

  const handleDelete = async (id) => {
    const adToDelete = adverts.find((ad) => ad._id === id || ad.id === id);
    if (adToDelete && (`Delete "${adToDelete.name}" (GH₵ ${adToDelete.price})?`)) {
      try {
        await apiDeleteVendorAdvertById(id);
        setAdverts((prevAds) => prevAds.filter((ad) => ad._id !== id && ad.id !== id));

        toast.success("Advert moved to Recycle Bin!", {
          style: {
            background: "#DDEEFE",
            color: "#073180",
            borderRadius: "8px",
            fontWeight: "bold",
            padding: "12px",
          },
        });
      } catch (error) {
        toast.error("Failed to delete advert", {
          style: { background: "#DDEEFE", color: "#073180" },
        });
        console.error("Error deleting advert:", error);
      }
    }
  };

  const goToRecycleBin = () => {
    navigate("../recycle-bin");
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading adverts...</p>;
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">My Adverts</h1>
          <button
            className="flex items-center text-red-500 border border-red-500 px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition"
            onClick={goToRecycleBin}
          >
            <Trash2 size={18} className="mr-2" /> Recycle Bin
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800 border hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredAds.length > 0 ? (
            filteredAds.map((ad) => (
              <div
                key={ad._id || ad.id}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
              >
                {ad.pictures && ad.pictures.length > 0 ? (
                  <img
                    className="w-40 h-40 object-cover rounded-md"
                    src={`${imageURL}${ad.pictures?.[0] || "default-placeholder.jpg"}`}
                    alt={ad.name}
                  />
                ) : (
                  <div className="w-40 h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div className="mt-4">
                  <h1 className="text-lg font-bold text-gray-800">{ad.name}</h1>
                  <p className="text-lg font-semibold text-[#073180] mt-1">
                    GH₵ {ad.price}
                  </p>
                  <p className="text-gray-500 font-medium">{ad.category}</p>
                  <div className="flex justify-center mt-3">
                    <EditDeleteButtons
                      handleEdit={() => handleEdit(ad)}
                      handleDelete={() => handleDelete(ad._id || ad.id)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No adverts available in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorAds;
