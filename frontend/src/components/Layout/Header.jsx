import { useState, useEffect } from "react";
import axios from "axios";
import { FiShoppingCart, FiMapPin, FiHeart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import AccountDropdown from "./AccountDropdown";
import LanguageDropdown from "./LanguageDropdown";
import { Link, useNavigate } from "react-router-dom";
import amazon from "../../assets/Amazon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const user = { name: "John Doe" }; // Simulating a logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(response.data); // Assuming response.data is an array of category names
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      navigate(`/products/category/${selectedCategory}`);
    } else {
      navigate("/products"); // Navigate to all products when "All" is selected
    }
  };

  return (
    <header className="bg-gray-900 text-white p-3">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Logo & Location */}
        <div className="flex items-center gap-3">
          <img
            src={amazon}
            alt="Amazon"
            className="w-16 h-auto rounded-md border border-transparent hover:border-white transition duration-300"
          />
          <div className="hidden lg:flex items-center text-sm hover:border-white transition duration-300">
            <FiMapPin className="mr-1" />
            <span>Deliver to Egypt</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden min-[1281px]:flex bg-white text-black rounded-md flex-grow max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
        <select
      className="p-2 bg-gray-200 text-black border-r"
      onChange={handleCategoryChange}
    >
      <option value="">All</option>
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <option key={index} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))
      ) : (
        <option disabled>Loading...</option>
      )}
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
        <div className="hidden md:flex items-center gap-4 text-sm">
          <LanguageDropdown />
          <AccountDropdown user={user} />
          <Link to="/wishlist" className="cursor-pointer flex items-center hover:border-white transition duration-300">
            <FiHeart className="text-2xl" />
            <span className="ml-1">Wishlist</span>
          </Link>
          <div className="cursor-pointer hover:border-white transition duration-300">
            <span>Returns</span>
            <div className="font-bold">& Orders</div>
          </div>
          <Link to="/cart" className="cursor-pointer flex items-center hover:border-white transition duration-300">
            <FiShoppingCart className="text-2xl" />
            <span className="ml-1">Cart</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageDropdown />
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
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/products/category/${category}`}
              className="cursor-pointer hover:border-white transition duration-300"
            >
              {category}
            </Link>
          ))}
          <Link to="/wishlist" className="cursor-pointer flex items-center hover:border-white transition duration-300">
            <FiHeart className="text-lg mr-1" />
            <span>Wishlist</span>
          </Link>
          {user && (
            <>
              <Link to="/cart" className="cursor-pointer flex items-center hover:border-white transition duration-300">
                <FiShoppingCart className="text-lg mr-1" />
                <span>Cart</span>
              </Link>
              <button className="cursor-pointer hover:border-white transition duration-300">Sign Out</button>
            </>
          )}
        </div>
      )}

      {/* Bottom Navigation (Categories) */}
      <nav className="hidden md:flex bg-gray-800 text-sm w-full left-0 right-0">
        <div className="flex flex-wrap items-center px-0 w-full overflow-x-auto">
          <div className="cursor-pointer hidden sm:flex items-center text-sm border border-transparent p-2 rounded-md hover:border-white transition duration-300">
            <FaBars className="text-xl mr-1" />
            <Link to="/products" className="cursor-pointer hover:underline">
              <span>All</span>
            </Link>          </div>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <Link
                key={index}
                to={`/products/category/${category}`}
                className="cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition duration-300"
              >
                {category}
              </Link>
            ))
          ) : (
            <span className="text-gray-400 p-2">Loading categories...</span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
