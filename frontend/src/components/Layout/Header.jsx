import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FiShoppingCart, FiMapPin, FiHeart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AccountDropdown from "./AccountDropdown";
import LanguageDropdown from "./LanguageDropdown";
import amazon from "../../assets/Amazon.png";
import SearchBar from "./SearchBar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  // Fetch cart and wishlist items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <header className="bg-gray-900 text-white p-3">
      {/* Desktop & Mobile Header */}
      <div className="flex container mx-auto justify-between items-center px-4">
        {/* Left: Logo & Location */}
        <div className="flex items-center gap-3">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 md:hidden">
            <FaBars className="text-xl" />
          </button>
          <img src={amazon} alt="Amazon" className="w-16 h-auto" />
          <div className="hidden md:flex items-center text-sm">
            <FiMapPin className="mr-1" />
            <span>Deliver to Egypt</span>
          </div>
        </div>

        {/* 🔍 Always Visible Search Bar */}
        <div className="flex-1 mx-4">
          <SearchBar categories={categories} />
        </div>

        {/* Right: Desktop & Mobile Icons */}
        <div className="flex items-center gap-4 text-sm">
          <LanguageDropdown />
          <AccountDropdown />

          {/* Wishlist */}
          <Link to="/wishlist" className="relative flex items-center">
            <FiHeart className="text-2xl" />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                {wishlistItems.length}
              </span>
            )}
            <span className="ml-1 hidden md:inline">Wishlist</span>
          </Link>

          {/* Orders */}
          <div className="hidden md:block cursor-pointer">
            <span>Returns</span>
            <div className="font-bold">& Orders</div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative flex items-center">
            <FiShoppingCart className="text-2xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full px-2">
                {cartItems.length}
              </span>
            )}
            <span className="ml-1 hidden md:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* 📍 Mobile Delivery Location */}
      <div className="md:hidden flex items-center px-4 py-2 text-sm bg-gray-700">
        <FiMapPin className="mr-2" />
        <span>Deliver to Egypt ▾</span>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 p-3 text-sm flex flex-col gap-2">
          {categories.map((category, index) => (
            <Link key={index} to={`/products/category/${category}`} className="cursor-pointer hover:border-white">
              {category}
            </Link>
          ))}
          <Link to="/wishlist" className="relative flex items-center">
            <FiHeart className="text-lg mr-1" />
            <span>Wishlist</span>
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative flex items-center">
            <FiShoppingCart className="text-lg mr-1" />
            <span>Cart</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full px-2">
                {cartItems.length}
              </span>
            )}
          </Link>
          <button className="cursor-pointer hover:border-white">Sign Out</button>
        </div>
      )}
    </header>
  );
};

export default Header;
