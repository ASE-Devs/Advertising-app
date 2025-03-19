import React from "react";

const CreateAd = () => {
  return (
    <div className="max-w-lg mx-auto mt-6 p-25 ">
      <form className="space-y-4 p-6 bg-amber-100 w-full rounded-lg shadow-md">
        {/* Ad Title */}
        <input
          type="text"
          name="title"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          placeholder="Ad Title"
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          placeholder="Price (GH₵)"
          required
        />

<input
  type="file"
  name="image"
  accept="image/*"
  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
  required
/>

        {/* Description */}
        <textarea
          name="description"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          placeholder="Description"
          rows="3"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600"
        >
          Post Ad
        </button>
      </form>
    </div>
  );
};

export default CreateAd;
