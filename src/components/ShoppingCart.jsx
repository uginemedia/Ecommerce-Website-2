import React, { useRef, useEffect } from 'react'
import { IoMdClose } from "react-icons/io";

const ShoppingCart = ({ isOpen, onClose }) => {
    const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
     <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-40' : 'opacity-0'
        }`}
      />

      {/* Cart Drawer */}
      <div
        ref={cartRef}
        className={`absolute top-0 right-0 h-full w-96 bg-white shadow-lg p-6 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center mb-4'>
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button onClick={onClose} className='flex items-center px-2 py-1 border rounded text-black border-gray-400 cursor-pointer'><IoMdClose className='text-2xl' /></button>
        </div>
        <p className="text-sm text-gray-500">0 items</p>
        <p className='text-sm text-gray-500 my-4'>Free shipping for all orders over $1000.00!</p>

        <p className='text-sm text-gray-600 text-center'>Your cart is empty</p>
        {/* You can map your cart items here */}
        <button
          className="mt-8 bg-indigo-600 text-white px-4 py-3 w-full rounded hover:bg-indigo-700 uppercase font-semibold cursor-pointer transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default ShoppingCart