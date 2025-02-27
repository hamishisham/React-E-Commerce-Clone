import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ categories = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery || selectedCategory) {
      const filtered = products.filter((product) => {
        const matchesCategory = selectedCategory
          ? product.category?.toLowerCase() === selectedCategory.toLowerCase()
          : true;
        const matchesSearch = searchQuery
          ? product.title?.toLowerCase().startsWith(searchQuery.toLowerCase())
          : true;
        return matchesCategory && matchesSearch;
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, selectedCategory, products]);

  const handleProductSelect = (productId) => {
    navigate(`/products/${productId}`);
    setSearchQuery("");
    setFilteredProducts([]);
  };

  return (
    <div className="relative flex w-full max-w-none bg-white text-black rounded-lg shadow-md flex-grow">
      <select
        className="p-2 bg-gray-200 text-black border-r"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories?.length > 0 ? (
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
        placeholder="Search products..."
        className="w-full p-2 outline-none text-black placeholder-gray-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button className="bg-yellow-500 px-4 flex items-center">
        <AiOutlineSearch className="text-xl" />
      </button>

      {filteredProducts?.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto z-50">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleProductSelect(product.id)}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default SearchBar;
