import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiGetSingleAdvert } from "../../services/adverts";
import { CheckCircle } from "lucide-react";

const SingleAd = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState(null);
  const imageURL = "https://res.cloudinary.com/dui8hhbha/image/upload/";

  useEffect(() => {
    const getAd = async () => {
      try {
        const response = await apiGetSingleAdvert(id);
        console.log("Advert Data:", response.data);
        setAdvert(response.data);
      } catch (error) {
        console.error("Error fetching advert:", error);
      }
    };

    getAd();
  }, [id]);

  if (!advert) {
    return <div className="text-center text-gray-500 p-20">Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row p-20 bg-white min-h-screen">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="bg-[#DDEEFE] p-4 shadow-lg rounded-lg">
            <img
              src={
                advert.pictures && advert.pictures.length > 0
                  ? `${imageURL}${advert.pictures[0]}`
                  : fallbackImage
              }
              alt={advert.name || "Product"}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="md:w-1/2 p-20 pt-5 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-black">{advert.name}</h1>
          <p className="text-xl font-semibold pt-4">
            {" "}
            <span className="font-bold text-[#073180] ">Price:</span> GH₵{" "}
            {advert.price || "N/A"}
          </p>
          <p className="text-black text-s pt-4">
            {" "}
            <span className="font-bold">Description:</span> {advert.description}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <h3 className="text-lg font-semibold text-gray-900">Available</h3>
          </div>
          <div className="flex gap-4 mt-2">
            {advert.colors?.map((color, index) => (
              <span
                key={index}
                className="w-6 h-6 rounded-full border-2 border-transparent cursor-pointer hover:border-gray-500"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
              Buy Now
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-[#DDEEFE]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAd;
