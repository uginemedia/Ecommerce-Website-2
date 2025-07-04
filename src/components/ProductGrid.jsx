import { useState } from 'react'
import product1 from "../assets/product-1.webp"
import product2 from "../assets/product-2.webp"
import product3 from "../assets/product-3.webp"
import product4 from "../assets/product-4.webp"
import product5 from "../assets/product-5.webp"
import product6 from "../assets/product-6.webp"
import product7 from "../assets/product-7.webp"
import product8 from "../assets/product-8.webp"
import product9 from "../assets/product-9.webp"
import product10 from "../assets/product-10.webp"
import product11 from "../assets/product-11.webp"
import product12 from "../assets/product-12.webp"
import React from 'react'
import { GoChevronDown } from 'react-icons/go'

const products = [
  {
    name: 'ANNA',
    description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
    originalPrice: '$450.00',
    salePrice: '$418.90',
    image: product1,
    saleTag: 'Sale 7%',
    available: true
  },
  {
    name: 'COLLETTE',
    description: 'Product 2 Sample - Clothing And Accessory Boutiques For Sale',
    salePrice: 'from $48.99',
    image: product2,
    available: true
  },
  {
    name: 'BENJAMIN BUTTON',
    description: 'Product 3 Sample - Clothing And Accessory Boutiques For Sale',
    originalPrice: '$86.00',
    salePrice: 'from $69.99',
    image: product3,
    saleTag: 'Sale 19%',
    available: true
  },
  {
    name: 'TOMORROW',
    description: 'Product 4 Sample - Clothing And Accessory Boutiques For Sale',
    salePrice: '$36.99',
    image: product4,
    available: true
  },
  {
    name: 'Kaftans',
    description: 'Product 5 Sample - Clothing And Accessory Boutiques For Sale',
    salePrice: '$36.99',
    image: product5,
    available: false
  },
  {
    name: 'Boubous',
    description: 'Product 6 Sample - Clothing And Accessory Boutiques For Sale',
    originalPrice: '$450.00',
    salePrice: '$418.90',
    image: product6,
    saleTag: 'Sale 5%',
    available: true
  },
  {
    name: 'Abayas',
    description: 'Product 7 Sample - Clothing And Accessory Boutiques For Sale',
    salePrice: '$418.90',
    image: product7,
    saleTag: 'Sale 17%',
    available: true
  },
  {
    name: 'Sarees',
    description: 'Product 8 Sample - Clothing And Accessory Boutiques For Sale',
    originalPrice: '$450.00',
    salePrice: '$418.90',
    image: product8,
    available: false
  },
  {
    name: 'Tankinis',
    description: 'Product 9 Sample - Clothing And Accessory Boutiques For Sale',
    salePrice: '$418.90',
    image: product9,
    available: false
  },
  {
    name: 'Performance Tops',
    description: 'Product 10 Sample - Clothing And Accessory Boutiques For Sale',
    originalPrice: '$450.00',
    salePrice: '$418.90',
    image: product10,
    saleTag: 'Sale 20%',
    available: true
  },
  {
    name: 'Culottes',
    description: 'Product 11 Sample - Clothing And Accessory Boutiques For Sale',
    originalPrice: '$450.00',
    salePrice: '$418.90',
    image: product11,
    saleTag: 'Sale 20%',
    available: true
  },
  {
    name: 'Blazers',
    description: 'Product 12 Sample - Clothing And Accessory Boutiques For Sale',
    originalPrice: '$450.00',
    salePrice: '$418.90',
    image: product12,
    saleTag: 'Sale 50%',
    available: true
  },
];

const ProductGrid = () => {

  const [visibleCount, setVisibleCount] = useState(4);
  const visibleProducts = products.slice(0, visibleCount);

  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = () => {
    setLoadMore(true);
    setTimeout(() => {
        setLoadMore(false);
        setVisibleCount((prev) => prev + 4);
    }, 2000);
  };


  return (
    <div className="px-4 py-10 max-w-7xl mx-auto relative">

        {/* Filter Bar */}
        <div className='relative mb-3 w-fit ml-auto'>
        <select className='appearance-none border border-gray-300 rounded px-4 pr-10 py-2 bg-white text-sm focus:outline-none cursor-pointer' defaultValue={"Featured"}>
            <option value="" disabled>Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="best-selling">Best Selling</option>
            <option value="top-rated">Top Rated</option>
            <option value="most-popular">Most Popular</option>  
        </select>
        <GoChevronDown className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        
       { /* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product, index) => (
          <div key={index} className="relative bg-white shadow hover:shadow-lg transition-all duration-300 rounded overflow-hidden group">
            {product.saleTag && (
              <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 z-10">
                {product.saleTag}
              </div>
            )}
            {!product.available && (
              <div className="absolute top-0 left-0 bg-gray-600 text-white text-xs font-semibold px-2 py-1 z-10">
                <span>Sold out</span>
              </div>
            )}
            <div className='overflow-hidden'>
                <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-gray-700 font-bold uppercase text-sm">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <div className="mt-3">
                {product.originalPrice && (
                  <span className="text-gray-400 line-through mr-2">{product.originalPrice}</span>
                )}
                <span className="text-red-500 font-bold">{product.salePrice}</span>
              </div>
            </div>
            <button className="absolute bottom-56 left-1/2 -translate-x-1/2 w-1/2 cursor-pointer bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-20">
              {product.available ? 'Add to Cart' : 'Notify Me'}
            </button>
          </div>
        ))}
      </div>

      {visibleCount < products.length ? (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-20 py-2 bg-transparent text-gray-700 border cursor-pointer uppercase hover:bg-indigo-700 transition duration-300 hover:text-white text-sm"
          >
            {loadMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      ) : (
        <div className="mt-10 text-center">
          <p className="text-gray-500">No more products to display</p>
        </div>
      )}
    </div>
  )
}

export default ProductGrid