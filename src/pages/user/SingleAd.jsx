import React, { useEffect } from 'react'
import Image  from '../../assets/Images/Dress.jpeg'
import Image2 from '../../assets/Images/Elegance.jpeg'
import Image3 from '../../assets/Images/Glowy.jpeg'
import Image4 from '../../assets/Images/Top.jpeg'
import Filter from '../../components/Filter'
import { useParams } from 'react-router'
import { useState } from 'react'
import { apiGetSingleAdvert } from '../../services/adverts'


const SingleAd = () => {
   const {id} = useParams();

   const [] = useState({});

   const getAd = async () => {
    try {
          const response = await apiGetSingleAdvert(id);
          setAdverts(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() =>{
        getAd();
      }, [])

  return (
    <>
    <div className="flex flex-col md:flex-row p-20 bg-white min-h-screen">
      {/* Left: Image Section */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className=" bg-[#DDEEFE] p-4 shadow-lg rounded-lg">
          <img 
            src={Image} // Replace with actual image path
            alt="Timeless Elegance Dress" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="md:w-1/2 p-20 pt-5 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-black">Elegant dress</h1>
        <p className="text-xl text-black font-semibold pt-4">GH₵ 250</p>
        <p className="text-black text-s pt-4">
          The <strong>Timeless Elegance Dress</strong> in a striking lime-green hue exudes royalty and sophistication. 
          Featuring a structured corset bodice, voluminous puff sleeves, and a gracefully pleated full skirt, 
          it creates a regal silhouette. Perfect for grand occasions, this statement piece combines vintage charm with modern luxury.
        </p>

        {/* Color Selection */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900">Colours:</h3>
          <div className="flex gap-4 mt-2">
            <span className="w-6 h-6 bg-black rounded-full border-2 border-transparent cursor-pointer hover:border-[#DAD72E]"></span>
            <span className="w-6 h-6 bg-white border-2 border-gray-400 rounded-full cursor-pointer hover:border-[#09132F]"></span>
            <span className="w-6 h-6 bg-blue-600 rounded-full border-2 border-transparent cursor-pointer hover:border-[#DAD72E]"></span>
            <span className="w-6 h-6 bg-[#DAD72E] rounded-full border-2 border-transparent cursor-pointer hover:border-[#09132F]"></span>
          </div>
        </div>

        {/* Size Selection */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900">Size:</h3>
          <div className="flex gap-2 mt-2">
            <span className="px-3 py-1 border border-gray-400 rounded-lg cursor-pointer hover:bg-[#DDEEFE]">XS</span>
            <span className="px-3 py-1 border border-gray-400 rounded-lg cursor-pointer hover:bg-[#DDEEFE]">S</span>
            <span className="px-3 py-1 border border-gray-400 rounded-lg cursor-pointer hover:bg-[#DDEEFE]">M</span>
            <span className="px-3 py-1 border border-gray-400 rounded-lg cursor-pointer hover:bg-[#DDEEFE]">L</span>
            <span className="px-3 py-1 border border-gray-400 rounded-lg cursor-pointer hover:bg-[#DDEEFE]">XL</span>
          </div>
        </div>

        {/* Buttons */}
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

    <div className='bg-[#DDEEFE]'>
      <h1 className='text-2xl font-bold text-black p-10'>Related Products</h1>
       <div className='flex gap-7 p-10 justify-around rounded-lg '>
        <div><img src={Image2} alt="Elegance" className="w-80 h-80 hover:scale-110 rounded-lg  " />
        <h1 className='text-xl p-5 font-semibold'>Graceful Charm Gown</h1> <p className='font-semibold ml-10'>GH₵ 200</p></div>
        <div><img src={Image3} alt="Glowy"  className="w-80 h-80 hover:scale-110 rounded-lg " /><h1 className='text-xl p-5 font-semibold'>Ethereal Beauty Gown</h1> <p className='font-semibold ml-10'>GH₵ 350</p></div>
        <div><img src={Image4} alt="Top" className="w-80 h-80 hover:scale-110 rounded-lg " /><h1 className='text-xl p-5 font-semibold'>Royal Radiance Dress</h1> <p className='font-semibold ml-10'>GH₵ 250</p></div>
       </div>
    </div>
    </>
  )
}

export default SingleAd