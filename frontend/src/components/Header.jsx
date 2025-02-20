import { useState } from "react";
import { FiShoppingCart, FiMapPin } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import AccountDropdown from "./AccountDropdown";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-2">
      {/* Top Header */}
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo & Location */}
        <div className="flex items-center gap-4">
          <img
            src="src/assets/Amazon.png"
            alt="Amazon"
            className="w-18 h-auto rounded-md border border-transparent hover:border-white transition duration-300"
          />

          {/* Location (Hidden on small screens) */}
          <div className="cursor-pointer hidden sm:flex items-center text-sm border border-transparent p-2 rounded-md hover:border-white transition duration-300">
            <FiMapPin className="mr-1" />
            <span>Deliver to Egypt</span>
          </div>
        </div>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden lg:flex bg-white text-black rounded-md w-1/2">
          <select className="p-2 bg-gray-200 text-black border-r">
            <option>All</option>
            <option>Electronics</option>
            <option>Books</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="w-full p-2 outline-none"
          />
          <button className="bg-yellow-500 px-4 flex items-center">
            <AiOutlineSearch className="text-xl" />
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <LanguageDropdown />
          <AccountDropdown />
          <div className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">
            <span>Returns</span>
            <div className="font-bold">& Orders</div>
          </div>
          <div className="cursor-pointer flex items-center border border-transparent p-2 rounded-md hover:border-white transition duration-300">
            <FiShoppingCart className="text-2xl" />
            <span>Cart</span>
          </div>
        </div>

        {/* Mobile Menu Button with Language and AccountDropdown */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageDropdown />
          <AccountDropdown />
          <button
            className="p-2 rounded-md border border-transparent hover:border-white transition duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 p-3 text-sm flex flex-col gap-2">
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Amazon miniTV</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Best Sellers</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Mobiles</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Customer Service</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Prime ▼</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Electronics</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Fashion</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">New Releases</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Home & Kitchen</span>
        </div>
      )}

      {/* Bottom Navigation (Hidden on small screens) */}
      <nav className="hidden md:flex bg-gray-800 p-2 text-sm">
        <div className="container mx-auto flex items-center gap-4">
          <div className="cursor-pointer hidden sm:flex items-center text-sm border border-transparent p-2 rounded-md hover:border-white transition duration-300"><FaBars className="text-xl mr-1" />
          <span>All</span></div>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Amazon miniTV</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Best Sellers</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Mobiles</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Customer Service</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300" >Prime ▼</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300" >Electronics</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Fashion</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">New Releases</span>
          <span className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300">Home & Kitchen</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
