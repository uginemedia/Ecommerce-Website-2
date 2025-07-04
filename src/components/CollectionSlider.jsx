import React from 'react'
import collection1 from "../assets/collection-1.jpg";
import collection2 from "../assets/collection-2.jpg";

const CollectionSlider = () => {
const collections = [
    {
    image: collection1,
    hashtag: '#MILANCE',
    text: 'Quisquemos sodales suscipit ditaemcos lorem de cosmo lacus meleifend menean...'
  },
  {
    image: collection2,
    hashtag: '#CONVALIS',
    text: 'Quisquemos sodales suscipit ditaemcos lorem de cosmo lacus meleifend menean...'
  }
];

return (
    <>
        <div className="flex flex-wrap justify-center gap-4 py-12 px-8">
            {/* Left Product Image */}
            <img
                src={collections[0].image}
                alt="model-1"
                className="md:w-72 w-full h-auto object-cover"
            />

            {/* Collection Card 1 */}
            <div className="border p-6 text-center md:w-72 w-full flex flex-col justify-between">
                <p className="text-gray-500 text-sm uppercase">New Collection</p>
                <h2 className="text-2xl font-bold my-2">{collections[0].hashtag}</h2>
                <p className="text-gray-600 text-sm mb-4">{collections[0].text}</p>
                <button className="bg-gray-600 text-white px-4 py-2 font-semibold cursor-pointer transition duration-300 hover:bg-gray-700">
                    SHOP NOW
                </button>
            </div>

            {/* Right Product Image */}
            <img
                src={collections[1].image}
                alt="model-2"
                className="md:w-72 w-full h-auto object-cover"
            />

            {/* Collection Card 2 */}
            <div className="border p-6 text-center md:w-72 w-full flex flex-col justify-between">
                <p className="text-gray-500 text-sm uppercase">New Collection</p>
                <h2 className="text-2xl font-bold my-2">{collections[1].hashtag}</h2>
                <p className="text-gray-600 text-sm mb-4">{collections[1].text}</p>
                <button className="bg-gray-600 text-white px-4 py-2 font-semibold cursor-pointer transition duration-300 hover:bg-gray-700">
                    SHOP NOW
                </button>
            </div>
        </div>
        <p className="px-4 sm:px-8 text-sm md:text-base max-w-3xl w-full mx-auto text-center text-gray-600 my-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis danos an molestie, sem in sollicitudin sodales mi justo sagittis est id consequat ipsum ligula a milance de mante...
        </p>
    </>
)
}

export default CollectionSlider