import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiUpdateAdvert } from "../services/adverts";

const categories = [
  "fashion and accessories",
  "beauty products",
  "kids and toys",
];

const EditAdForm = () => {
  const navigate = useNavigate();
  const [ad, setAd] = useState({ name: "", price: "", category: "" });

  useEffect(() => {
    const storedAd = JSON.parse(localStorage.getItem("selectedAd"));
    if (storedAd) {
      setAd(storedAd);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAd((prevAd) => ({ ...prevAd, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await apiUpdateAdvert(ad.id, {
        name: ad.name,
        price: ad.price,
        category: ad.category,
      });

      console.log("Advert updated successfully:", response.data);
      navigate("/dashboard/ads");
    } catch (error) {
      console.error("Update Error:", error.response?.data || error.message);
      alert("Failed to update advert");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Title</label>
        <input
          type="text"
          name="name"
          value={ad.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Price</label>
        <div className="flex items-center border rounded-md px-4 py-2 bg-gray-100">
          <span className="text-gray-700 font-semibold mr-2">GH₵</span>
          <input
            type="number"
            name="price"
            value={ad.price}
            onChange={handleChange}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Category</label>
        <select
          name="category"
          value={ad.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditAdForm;
