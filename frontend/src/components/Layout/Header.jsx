import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart, FiMapPin, FiHeart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AccountDropdown from "./AccountDropdown";
import LanguageDropdown from "./LanguageDropdown";
import amazon from "../../assets/Amazon.png";
import SearchBar from "./SearchBar";
import { fetchProducts, filterProducts } from "../../redux/slices/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const brands = useSelector((state) => state.products.brands);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");

  // Fetch cart and wishlist items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (products.length > 0) {
      dispatch(filterProducts({ selectedPrice: "all", selectedBrand, selectedRating: 0 }));
    }
  }, [selectedBrand, dispatch, products.length]);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <header className="bg-gray-900 text-white p-3">
      <div className="flex container mx-auto justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 lg:hidden">
            <FaBars className="text-xl" />
          </button>
                <Link to="/">
        <img src={amazon} alt="Amazon" className="w-16 h-auto cursor-pointer" />
      </Link>       
         <div className="hidden lg:flex items-center text-sm">
            <FiMapPin className="mr-1" />
            <span>Deliver to Egypt</span>
          </div>
        </div>

        <div className="hidden lg:block">
          <SearchBar />
        </div>

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
            <span className="ml-1 hidden lg:inline">Wishlist</span>
          </Link>
           {/* Orders */}
            <Link to="/orders" className="hidden md:block cursor-pointer">
              <div>
                <span>Returns</span>
                <div className="font-bold">& Orders</div>
              </div>
            </Link>
          {/* Cart */}
          <Link to="/cart" className="relative flex items-center">
            <FiShoppingCart className="text-2xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full px-2">
                {cartItems.length}
              </span>
            )}
            <span className="ml-1 hidden lg:inline">Cart</span>
          </Link>
        </div>
      </div>

      <div className="lg:hidden mb-2 mt-2">
        <SearchBar />
      </div>

      <div className="lg:hidden flex items-center px-4 py-2 text-sm bg-gray-700">
        <FiMapPin className="mr-2" />
        <span>Deliver to Egypt ▾</span>
      </div>

      {/* Navigation Bar with Brands */}
      <nav className="bg-gray-800 py-2 text-sm hidden lg:flex justify-start gap-4">
        <div className="lg:flex hover:underline px-3">
          <FaBars className="text-xl mr-2" />
          <Link to="/products" onClick={() => handleBrandChange("")}>All</Link>
        </div>
        {brands.map((brand, index) => (
          <button 
            key={index} 
            className={`px-3 hover:underline ${selectedBrand === brand ? "font-bold" : ""}`}
            onClick={() => handleBrandChange(brand)}
          >
            {brand}
          </button>
        ))}
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-gray-800 p-3 text-sm flex flex-col gap-2">
          {brands.map((brand, index) => (
            <button 
              key={index} 
              className={`cursor-pointer hover:border-white ${selectedBrand === brand ? "font-bold" : ""}`} 
              onClick={() => handleBrandChange(brand)}
            >
              {brand}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
