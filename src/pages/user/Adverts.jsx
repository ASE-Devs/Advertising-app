import React, { useEffect, useState } from "react";
import { apiGetAllAdverts } from "../../services/adverts";
import ProductCard from "../../components/ProductCard";

const Adverts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchAds = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetAllAdverts();
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex flex-wrap gap-6 h-full p-3 pt-20  ">
      {num.map((item) => (
        <ProductCard key={item} />
      ))}
    </div>
  );
};

export default Adverts;
