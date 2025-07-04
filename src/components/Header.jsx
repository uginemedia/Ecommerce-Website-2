import React, {useState} from 'react'
import { IoCartOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

// Importing the shopping cart component
import ShoppingCart from './ShoppingCart';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // State to manage cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

return (
    <>
    <header className="flex justify-between items-center px-6 py-4 bg-transparent text-black uppercase">
        <a href='' className="text-2xl font-bold">FabrikFit</a>

        {/* Mobile menu button */}
        <button
            className="lg:hidden flex items-center px-2 py-1 border rounded text-black border-gray-400 cursor-pointer"
            onClick={() => toggleMenu('mobile')}
        >
            <IoIosMenu className="text-3xl" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:block relative">
            <ul className="flex gap-6 font-medium">
                <li className="cursor-pointer hover:text-indigo-700">Home</li>

                {/* SHOP DROPDOWN */}
                <li className="group relative cursor-pointer">
                    <span className="hover:text-indigo-700">Shop</span>
                    <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700 overflow-hidden">Men</li>
                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">Women</li>

                        {/* Submenu */}
                        <li className="relative group/submenu">
                            <span className="px-4 py-2 flex items-center justify-between hover:bg-gray-100 hover:text-indigo-700">Accessories <MdChevronRight /></span>
                            <ul className="absolute left-full top-0 ml-1 w-44 bg-white text-black rounded-md shadow-lg opacity-0 group-hover/submenu:opacity-100 group-hover/submenu:visible invisible transition-all duration-300 z-50">
                                <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">Chargers</li>
                                <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">Cables</li>
                                <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">Headphones</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* COLLECTIONS DROPDOWN */}
                <li className="group relative cursor-pointer">
                    <span className="hover:text-indigo-700">Collections</span>
                    <ul className="absolute left-0 top-full mt-2 w-56 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">Essentials</li>
                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">Streetwear</li>
                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">Workwear</li>
                    </ul>
                </li>

                <li className="cursor-pointer hover:text-indigo-700">LookBook</li>
                <li className="cursor-pointer hover:text-indigo-700">Contact</li>
            </ul>
        </nav>

        {/* Mobile nav */}
        {openMenu === 'mobile' && (
            <nav className="lg:hidden fixed inset-0 bg-gray-950 z-50 flex flex-col">
                <div className="bg-white w-3/4 max-w-xs h-full p-6 shadow-lg overflow-y-auto">
                    <button
                        className="flex items-center px-2 py-1 border rounded text-black border-gray-400 cursor-pointer mb-6"
                        onClick={() => setOpenMenu(null)}
                    >
                        <IoMdClose className="text-3xl" />
                    </button>
                    <ul className="flex flex-col gap-4 font-medium">
                        <li className="cursor-pointer hover:text-indigo-700">Home</li>
                        {/* SHOP DROPDOWN */}
                        <li>
                            <details>
                                <summary className="cursor-pointer hover:text-indigo-700">Shop</summary>
                                <ul className="ml-4 mt-2 flex flex-col gap-2">
                                    <li className="hover:text-indigo-700 cursor-pointer">Men</li>
                                    <li className="hover:text-indigo-700 cursor-pointer">Women</li>
                                    <li>
                                        <details>
                                            <summary className="hover:text-indigo-700 cursor-pointer">Accessories</summary>
                                            <ul className="ml-4 mt-1 flex flex-col gap-1">
                                                <li className="hover:text-indigo-700 cursor-pointer">Chargers</li>
                                                <li className="hover:text-indigo-700 cursor-pointer">Cables</li>
                                                <li className="hover:text-indigo-700 cursor-pointer">Headphones</li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        {/* COLLECTIONS DROPDOWN */}
                        <li>
                            <details>
                                <summary className="cursor-pointer hover:text-indigo-700">Collections</summary>
                                <ul className="ml-4 mt-2 flex flex-col gap-2">
                                    <li className="hover:text-indigo-700 cursor-pointer">Essentials</li>
                                    <li className="hover:text-indigo-700 cursor-pointer">Streetwear</li>
                                    <li className="hover:text-indigo-700 cursor-pointer">Workwear</li>
                                </ul>
                            </details>
                        </li>
                        <li className="cursor-pointer hover:text-indigo-700">LookBook</li>
                        <li className="cursor-pointer hover:text-indigo-700">Contact</li>
                    </ul>
                    <div className="mt-8 flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-3 py-1 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-700" />
                        <button className="px-6 py-3 bg-indigo-700 cursor-pointer rounded-full text-white font-semibold hover:bg-indigo-800 transition">Create an Account</button>
                    </div>
                </div>
            </nav>
        )}

        <div className="hidden lg:flex items-center gap-4">
            <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-700" />
            <span className="text-xl cursor-pointer" onClick={() => setIsCartOpen(true)}><IoCartOutline className='text-gray-900 hover:text-indigo-700 text-2xl' /></span>
            <button className="px-6 py-3 bg-indigo-700 cursor-pointer rounded-full text-white font-semibold hover:bg-indigo-800 transition">Create an Account</button>
        </div>
    </header>
    <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
)
}

export default Header