import React, { useEffect, useState, } from 'react'
import { apiGetAllAdverts } from '../../services/adverts'

const Adverts = () => {
const [isLoading, setIsLoading] = useState(false);

  const fetchAds = async () => {
    setIsLoading(true);
    try {
        const res = await apiGetAllAdverts();
        console.log(res);
    }catch(error) {
        console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    fetchAds();
  }, []);

  return (
    <div>Adverts</div>
  )
}

export default Adverts