import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Trash2 } from "lucide-react";
import EditDeleteButtons from "../../components/EditDeleteButtons";
import bagImage from "../../assets/pics/bag1.jpg";

const categories = ["All Categories", "Kids & Toys", "Fashion & Accessories", "Beauty Products"];

// This is a dummy one to replaced the original one from the backend
const initialAdverts = [
  { id: 1, title: "Educational - Toys", price: "GH₵ 5,500", category: "Kids & Toys", image: bagImage },
  { id: 2, title: "Stylish Leather Bag", price: "GH₵ 350", category: "Fashion & Accessories", image: bagImage },
  { id: 3, title: "Men's Sneakers", price: "GH₵ 250", category: "Fashion & Accessories", image: bagImage },
  { id: 4, title: "Sherla Hair Oil", price: "GH₵ 4,200", category: "Beauty Products", image: bagImage },
  { id: 5, title: "Sherla Body lotion", price: "GH₵ 900", category: "Beauty Products", image: bagImage },
  { id: 6, title: "Kids Clothing", price: "GH₵ 800", category: "Kids & Toys", image: bagImage },
];

const VendorAds = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [adverts, setAdverts] = useState(initialAdverts);
  const [deletedAds, setDeletedAds] = useState([]);

  const filteredAds =
    selectedCategory === "All Categories"
      ? adverts
      : adverts.filter((ad) => ad.category === selectedCategory);

  const handleEdit = (ad) => {
    localStorage.setItem("selectedAd", JSON.stringify(ad));
    navigate("../edit-ad");
  };

  const handleDelete = (id) => {
    const adToDelete = adverts.find((ad) => ad.id === id);
    if (window.confirm(`Are you sure you want to delete "${adToDelete.title}"?`)) {
      const updatedDeletedAds = [...deletedAds, adToDelete];
      setDeletedAds(updatedDeletedAds);
      localStorage.setItem("deletedAds", JSON.stringify(updatedDeletedAds));
      setAdverts(adverts.filter((ad) => ad.id !== id));
    }
  };

  const goToRecycleBin = () => {
    navigate("../recycle-bin", { state: { deletedAds } });
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 px-4 sm:px-6 lg:px-16">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-between items-center w-full">
          <h1 className="text-2xl font-semibold">My Adverts</h1>
          <button className="flex items-center text-red-500 border border-red-500 px-3 py-1 rounded-md" onClick={goToRecycleBin}>
            <Trash2 size={18} className="mr-2" /> Recycle Bin ({deletedAds.length})
          </button>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedCategory === category ? "bg-gray-800 text-white" : "bg-white text-gray-800 border"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {filteredAds.length > 0 ? (
            filteredAds.map((ad) => (
              <div key={ad.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-full">
                <img className="w-40 h-40 object-cover rounded-md" src={ad.image} alt={ad.title} />
                <div className="mt-4 w-full">
                  <p className="text-lg font-semibold truncate">{ad.title}</p>
                  <p className="text-gray-700 text-xl font-bold">{ad.price}</p>
                  <p className="text-gray-500 font-medium">{ad.category}</p>
                  <div className="flex justify-center mt-3">
                    <EditDeleteButtons onEdit={() => handleEdit(ad)} onDelete={() => handleDelete(ad.id)} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">No adverts available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorAds;
