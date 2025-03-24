export default function AdFilterPage() {
    return (
      <div className="flex flex-col md:flex-row h-[100svh] p-20 bg-gray-100">
        {/* Sidebar */}
        <aside className="w-full md:w-64 p-4 bg-transparent shadow-lg rounded-2xl md:fixed md:h-full overflow-auto">
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul>
            {[
              { name: "Fashion and Accessories", items: ["Men's Clothing", "Women's Clothing", "Shoes", "Jewellery", "Bags", "Sunglasses"] },
              { name: "Beauty Products", items: ["Skincare", "Haircare", "Makeup", "Fragrances", "Nailcare", "Grooming Kits"] },
              { name: "Toys and Kids", items: ["Educational Toys", "Dolls", "Playing Equipments", "Baby Gear", "Kids Clothing"] }
            ].map((category, index) => (
              <li key={index} className="p-2 rounded-lg border border-transparent bg-gray-100 hover:bg-blue-200">
                <details>
                  <summary className="flex items-center cursor-pointer">
                    {category.name}
                  </summary>
                  <ul className="ml-4 mt-2">
                    {category.items.map((item, i) => (
                      <li 
                        key={i} 
                        className="p-1 text-blue-600 cursor-pointer hover:bg-blue-100 rounded hover:text-xl hover:font-bold"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
  
          {/* Price Filter */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Filter by Price</h3>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">GH₵</span>
                <input 
                  type="number" 
                  placeholder="Min Price" 
                  className="p-2 pl-12 border rounded-md w-full"
                  name="minPrice"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">GH₵</span>
                <input 
                  type="number" 
                  placeholder="Max Price" 
                  className="p-2 pl-12 border rounded-md w-full"
                  name="maxPrice"
                />
              </div>
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Apply Price
              </button>
            </div>
          </div>
        </aside>
      </div>
    );
  }
  