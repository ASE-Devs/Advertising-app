import React, { useEffect, useState } from "react";
import { apiGetAllAdverts } from "../../services/adverts";
import ProductCard from "../../components/ProductCard";
import { Link, useNavigate } from "react-router";
import { FaRegStar, FaStar } from "react-icons/fa";

const Adverts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const navigate = useNavigate();
  const [adverts, setAdverts] = useState([]);
  const imageURL = "https://res.cloudinary.com/dui8hhbha/image/upload/";

  const getAds = async () => {
    try {
      const response = await apiGetAllAdverts();
      setAdverts(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 h-full p-3 pt-20  ">
      {adverts.map((ad) => {
        return (
          <div key={ad.id}>
            <div className="entire-product border border-gray-500 w-[200px] h-[340px] flex flex-col gap-3 p-3 rounded-lg shadow-md bg-white relative transition-all duration-300 hover:shadow-lg">
              <p className="discount bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-md absolute right-2 top-2">
                -40%
              </p>

              <div className="image-container h-[200px] w-full overflow-hidden flex justify-center items-center rounded-md">
                <img
                  src={`${imageURL}${ad.pictures[0]}`}
                  alt={ad.name}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              <div className="product-details text-center">
                <h1 className="font-bold text-lg">{ad.name}</h1>
                <p className="font-medium text-gray-700"> GH₵ {ad.price}</p>

                <div className="flex justify-center items-center gap-1 text-yellow-500 mt-1">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                </div>
              </div>

              <Link to={`/adverts/${ad.id}`}>
                <button className="bg-black text-white w-full h-[35px] rounded-md hover:bg-gray-800 transition duration-300">
                  {" "}
                  View More
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Adverts;
