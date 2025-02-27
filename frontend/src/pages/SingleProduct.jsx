import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice"; 
import { addToWishlist } from "../redux/slices/wishlistSlice"; // Import wishlist action

import Layout from "../components/Layout/Layout";
import ProductImage from "../components/SingleProduct/ProductImage";
import ProductInfo from "../components/SingleProduct/ProductInfo";
import PricingSection from "../components/SingleProduct/PricingSection";
import ProductHighlights from "../components/SingleProduct/ProductHighlights";
import CustomerReviews from "../components/SingleProduct/CustomerReviews";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams(); // Get product id from URL

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for selected quantity
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, [id]); // Include id as a dependency

  // Add to Cart Function
  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({ 
          id: product.id, 
          name: product.title, 
          price: product.price, 
          image: product.image, 
          quantity: quantity 
        })
      );
    }
  };

  // Add to Wishlist Function
  const handleAddToWishlist = () => {
    if (product) {
      dispatch(
        addToWishlist({
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.image,
          quantity: quantity // Include quantity selection
        })
      );
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - Product Image */}
        <div className="md:col-span-1 flex justify-center">
          <ProductImage imageUrl={product?.image || "/default-product.jpg"} />
        </div>

        {/* Middle Section - Product Info & Pricing */}
        <div className="md:col-span-1">
          <ProductInfo 
            brand={product?.category || "Unknown Brand"} 
            title={product?.title || "Product Title"} 
            rating={product?.rating?.rate}
            reviewsCount={product?.rating?.count}
          />
          <PricingSection 
            price={`EGP ${product?.price || "203.14"}`} 
            discount="Extra 20% off"
            emi="SAR 96 delivery 6-9 October"
          />
          <ProductHighlights highlights={product?.description?.split(".") || ["Feature 1", "Feature 2"]} />
        </div>

        {/* Right Section - Purchase Box */}
        <div className="md:col-span-1 border p-4 shadow-lg rounded-lg">
          <p className="text-2xl font-bold">EGP {product?.price || "203.14"}</p>
          <p className="text-sm text-gray-600">SAR96 delivery <strong>6-9 October</strong></p>
          <p className="text-green-600">Extra 20% off with credit cards</p>
          <p className="text-red-600 font-bold">Usually ships within 4 to 5 days</p>

          {/* Quantity Selector */}
          <select 
            className="w-full border p-2 rounded mt-2"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          >
            {[...Array(10)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                Quantity: {index + 1}
              </option>
            ))}
          </select>

          <button 
            className="w-full bg-yellow-400 text-black py-2 mt-3 rounded-full"
            onClick={handleAddToCart} 
          >
            Add to Cart
          </button>
          <button className="w-full bg-orange-500 text-black py-2 mt-2 rounded-full">
            Buy Now
          </button>

          <p className="text-sm mt-2">Ships from <strong>Monatik LLC</strong></p>
          <p className="text-sm">Sold by <span className="text-blue-500">Monatik LLC</span></p>
          <p className="text-sm text-blue-500">Secure transaction</p>

          {/* Add to Wishlist Button */}
          <button 
            className="w-full border py-2 mt-3 rounded text-gray-700"
            onClick={handleAddToWishlist} // Trigger wishlist function
          >
            Add to List
          </button>
        </div>
      </div>

      {/* Customer Reviews */}
      <CustomerReviews 
        reviews={[
          { 
            user: "Krake", 
            rating: 5, 
            title: "Amazing Product!", 
            comment: "Excellent product, highly recommended!", 
            date: "February 25, 2025" 
          },
          { 
            user: "D.S.", 
            rating: 4, 
            title: "Good but has room for improvement", 
            comment: "Good quality, but I expected a bit more for the price.", 
            date: "February 20, 2025" 
          }
        ]} 
      />
    </Layout>
  );
};

// ✅ Add PropTypes validation
SingleProduct.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SingleProduct;
