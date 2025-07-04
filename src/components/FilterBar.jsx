import React from 'react'
import { GoChevronDown } from "react-icons/go";


const options = {
  Price: ['Under $50', '$50 - $100', '$100 - $200', 'Above $200'],
  'Product Type': ['T-Shirts', 'Jeans', 'Sneakers', 'Accessories'],
  Brand: ['Nike', 'Adidas', 'Zara', 'Puma'],
  Availability: ['In Stock', 'Out of Stock'],
  Color: ['Black', 'White', 'Red', 'Blue'],
  Size: ['Small', 'Medium', 'Large', 'XL'],
};

const SelectBox = ({ label, items }) => (
  <div className="relative">
    <select
      className="appearance-none border border-gray-300 rounded px-4 pr-10 py-2 bg-white text-sm focus:outline-none cursor-pointer"
      defaultValue=""
    >
      <option value="" disabled>{label}</option>
      {items.map((item, idx) => (
        <option key={idx} value={item}>{item}</option>
      ))}
    </select>
    <GoChevronDown className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
  </div>
);

const FilterBar = () => {
  return (
    <div className="py-12 flex items-center justify-center flex-wrap gap-10 p-4 bg-white border-b border-gray-300 mb-10">
      {Object.entries(options).map(([label, items]) => (
        <SelectBox key={label} label={label} items={items} />
      ))}
    </div>
  )
}

export default FilterBar