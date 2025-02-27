import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

const WishlistProductCard = ({ item, onRemove , onMoveToCart }) => {
  if (!item) {
    return <p className="text-red-500">Error: Product data is missing.</p>;
  }

  return (
    <div className="border-t pt-4 pb-4 flex gap-4 items-center">
      {/* Product Image */}
      <img
        src={item.image || "https://via.placeholder.com/100"} // Fallback image
        alt={item.name || "Product Image"}
        className="w-24 h-24 object-cover border rounded-md"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold">{item.name || "Unknown Product"}</h3>
        <p className="text-gray-700 text-xs">
          <span className="font-semibold">Price:</span> EGP {item.price ? item.price.toLocaleString() : "N/A"}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-2">
          {/* Styled "Add to Cart" Button */}
          <button className="text-black bg-yellow-400 w-24 md:w-36 h-7 rounded-full text-xs md:text-sm font-light px-3 md:px-4 py-1 md:py-2 hover:bg-yellow-500 transition flex items-center justify-center"  
          onClick={() => onMoveToCart?.(item)}>
            Add to Cart
            </button>


          {/* Remove Button */}
          <button
            className="text-red-500 hover:text-red-600 flex items-center gap-1 text-xs"
            onClick={() => onRemove?.(item.id)}
          >
            <FaTrash />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// 🔹 **PropTypes Validation**
WishlistProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
  onRemove: PropTypes.func,
  onMoveToCart: PropTypes.func, 
};

// 🔹 **Default Props (Handles Missing Item)**
WishlistProductCard.defaultProps = {
  item: {
    id: 0,
    name: "Unknown Product",
    image: "https://via.placeholder.com/100",
    price: 0,
  },
  onRemove: () => {},
};

export default WishlistProductCard;
