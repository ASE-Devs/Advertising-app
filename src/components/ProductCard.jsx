import React from 'react'
import shoe from '../assets/Images/shoe.jpg'
import { FaStar, FaRegStar } from 'react-icons/fa'


const ProductCard = () => {
    return (
        <div>
            <div className="entire-product border border-gray-500 w-[200px] h-[340px] flex flex-col gap-3 p-3 rounded-lg shadow-md bg-white relative transition-all duration-300 hover:shadow-lg">

                <p className="discount bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-md absolute left-2 top-2">
                    -40%
                </p>

                <div className="image-container h-[200px] w-full overflow-hidden flex justify-center items-center rounded-md">
                    <img src={shoe} alt="Shoe" className="object-cover w-full h-full rounded-md" />
                </div>

                <div className="product-details text-center">
                    <h1 className="font-bold text-lg">Shoes</h1>
                    <p className="font-medium text-gray-700">GHS250.00</p>

                    <div className="flex justify-center items-center gap-1 text-yellow-500 mt-1">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                    </div>
                </div>

                <button className="bg-black text-white w-full h-[35px] rounded-md hover:bg-gray-800 transition duration-300">
                    Add to Cart
                </button>

            </div>
        </div>
    )
}

export default ProductCard