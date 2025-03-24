import React from "react";

const categories = ["Fashion & Accessories", "Kids & Toys", "Beauty Products"];

const EditAdForm = ({ ad, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // Placeholder for backend integration
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Edit Advertisement</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={ad?.title || ""}
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Price</label>
        <div className="flex items-center border rounded-md px-4 py-2 bg-gray-100">
          <span className="text-gray-700 font-semibold mr-2">GH₵</span>
          <input
            type="text"
            name="price"
            defaultValue={ad?.price || ""}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Category</label>
        <select
          name="category"
          defaultValue={ad?.category || ""}
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

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Image</label>
        <input
          type="file"
          accept="image/*"
          className="w-full px-4 py-2 border rounded-md cursor-pointer"
        />
        {ad?.image && (
          <img
            src={ad.image}
            alt="Preview"
            className="mt-2 w-32 h-32 object-cover rounded-md shadow-lg"
          />
        )}
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
