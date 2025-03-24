import React from "react";

const CreateAd = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Post an Ad
        </h1>

        <div className="space-y-4">
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option value="">Select a category</option>
            <option value="Fashion & Accessories">Fashion & Accessories</option>
            <option value="Beauty Products">Beauty Products</option>
            <option value="Kids & Toys">Kids & Toys</option>
          </select>

          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            name="title"
            placeholder="Ad title"
            required
          />

          <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-100">
            <span className="text-gray-700 font-semibold mr-2">GH₵</span>
            <input
              className="w-full bg-transparent focus:outline-none"
              type="number"
              name="price"
              placeholder="0.00"
              required
            />
          </div>

          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="file"
            name="image"
            accept="image/*"
            required
          />

          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            name="description"
            placeholder="Description"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Post Ad
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAd;
