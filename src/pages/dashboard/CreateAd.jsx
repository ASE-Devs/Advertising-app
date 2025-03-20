import React from "react";


const CreateAd = () => {
  return (
    <div className="mx-auto mt-2 place-content-center w-full pl-52 pr-52">
     
      <form className="space-y-4 p-6 bg-white rounded-lg shadow-2xl ">
        <h1 className="text-gray-700 font-medium pb-4 flex items-center">
          Post an Ad
        </h1>
        <select className="border border-gray-300 p-2 rounded w-full">
          <option value="">Select a category</option>
          <option value="electronics">Fashion & Accessories</option>
          <option value="fashion">Beauty Products</option>
          <option value="real-estate">Kids & Toys</option>
        </select>

        <input
          className="w-full p-3 border border-gray-300 "
          type="text"
          name="title"
          placeholder="Ad title"
          required
        />

        <input
          className="w-full p-3 border border-gray-300"
          type="number"
          name="price"
          placeholder="Price (GH₵)"
          required
        />
        <input
          className="w-full p-3 border border-gray-300"
          type="file"
          name="image"
          accept="image/*"
          required
        />

        <input
          className="w-full p-3 border-2 border-gray-300"
          type="name"
          name="Description"
          placeholder="Description"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#5575F2] text-white py-2 rounded-md hover:bg-[#5575F2]"
        >
          Post Ad
        </button>
      </form>
    </div>
  );
};

export default CreateAd;
